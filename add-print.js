const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'pages', 'calculators');
if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));
let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Inject the HTML Button inside the #results div
  if (!content.includes('id="printBtn"')) {
    // We look for the exact closing </div> of the results section
    const primaryRegex = /(\s*)<\/div>(\s*<div class="bg-white border border-gray-200[^>]*>\s*<h2[^>]*>How to Use This Calculator<\/h2>)/;
    const secondaryRegex = /(\s*)<\/div>(\s*<div class="bg-gray-50 border border-gray-200[^>]*>\s*<h2[^>]*>Related Calculators<\/h2>)/;
    
    const buttonCode = (space) => `${space}  <button id="printBtn" onclick="window.print()" class="hidden mt-5 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors print:hidden text-base flex justify-center items-center gap-2">\n${space}    🖨️ Print or Save as PDF\n${space}  </button>\n${space}</div>`;

    if (primaryRegex.test(content)) {
      content = content.replace(primaryRegex, (match, space1, space2) => buttonCode(space1) + space2);
      modified = true;
    } else if (secondaryRegex.test(content)) {
      content = content.replace(secondaryRegex, (match, space1, space2) => buttonCode(space1) + space2);
      modified = true;
    } else {
      console.log(`⚠️  Could not find HTML injection point in ${file}`);
    }
  }

  // 2. Inject the JS Command
  if (!content.includes("getElementById('printBtn').classList.remove('hidden')")) {
    const jsRegex = /(document\.getElementById\('results'\)\.classList\.remove\('hidden'\);?)/g;
    
    if (jsRegex.test(content)) {
      content = content.replace(jsRegex, "$1\n    document.getElementById('printBtn').classList.remove('hidden');");
      modified = true;
    } else {
      console.log(`⚠️  Could not find JS injection point in ${file}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${file}`);
    updatedCount++;
  } else {
    console.log(`⏭️  Skipped ${file} (Already updated)`);
  }
});

console.log(`\n🎉 Finished! Updated ${updatedCount} calculators.`);
