/**
 * FG Group CRM tracking for this site: cookie banner, visitor tracker, and the link that makes an inquiry and the
 * visitor's browsing one lead. Site key 'gls-website' is registered in fg-api src/config/website-sources.js, which
 * sends this site's leads to the GN section of the CRM. How it works: ./fg-crm-tracking.js
 */
import apiConfig from '../assets/js/config/apiConfig';
import { publicAxiosInstance } from '../assets/js/config/api';
import { initCrmTracking, attachToAxios } from './fg-crm-tracking';

initCrmTracking({
  apiBase: apiConfig.BASE_URL,
  siteKey: 'gls-website',
  brand: 'Gomzi Lifesciences',
  accent: '#86c33a',
  accentText: '#0f172a',
  profileKeys: ['user_info','gomzi_checkout_details'],
});

// every POST /contact-inquiry carries the visitor id, so the inquiry joins the visitor's lead
attachToAxios(publicAxiosInstance);
