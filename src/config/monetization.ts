export interface AdSenseConfig {
  clientId: string;
  calculatorBelowResultsSlot: string;
  articleInFeedSlot: string;
}

export interface AffiliateConfig {
  enabled: boolean;
  amazonTag: string;
  homeDepotImpactId: string;
  lowesImpactId: string;
}

/**
 * Centralized monetization configuration.
 * Keep slot IDs empty until AdSense approves the site and issues live slot IDs
 * so <AdSlot /> renders zero blank boxes pre-approval.
 */
export const ADSENSE_CONFIG: AdSenseConfig = {
  clientId: 'ca-pub-6410565511961171',
  calculatorBelowResultsSlot: '',
  articleInFeedSlot: '',
};

/**
 * Placeholder affiliate configuration for future partner activation.
 * Keep enabled=false until formal partner IDs are approved.
 */
export const AFFILIATE_CONFIG: AffiliateConfig = {
  enabled: false,
  amazonTag: '',
  homeDepotImpactId: '',
  lowesImpactId: '',
};
