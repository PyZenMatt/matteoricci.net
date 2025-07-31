// Cookie Management System

const COOKIE_CONSENT_KEY = 'matteoricci_cookie_consent';
const COOKIE_BANNER_DELAY = 1000; // Show after 1 second

// Check if user has already made a choice
function hasUserConsent() {
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  // Considera "no consenso" se la chiave non esiste, è vuota, null o contiene un valore non valido
  if (!value || value === 'null' || value === 'undefined') return false;
  // Se usi JSON.stringify per salvare, controlla anche che sia un oggetto valido
  try {
    const parsed = JSON.parse(value);
    if (typeof parsed === 'object' && parsed !== null) return true;
  } catch (e) {
    // Se non è JSON, considera comunque come consenso dato (per retrocompatibilità)
    if (value === 'accepted' || value === 'declined') return true;
  }
  return false;
}

// Show cookie banner
function showCookieBanner() {
  if (!hasUserConsent()) {
    setTimeout(() => {
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.style.display = 'block';
    }, COOKIE_BANNER_DELAY);
  }
}

// Accept all cookies
function acceptCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
  
  // Enable Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  
  console.log('Cookies accepted - Analytics enabled');
}

// Decline cookies
function declineCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
  document.getElementById('cookie-banner').style.display = 'none';
  
  // Disable Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
  
  console.log('Cookies declined - Analytics disabled');
}

// Cookie settings (placeholder for future implementation)
function cookieSettings() {
  alert('Cookie settings panel coming soon! For now, you can accept or decline all cookies.');
}

// Initialize cookie system
document.addEventListener('DOMContentLoaded', function() {
  // Check consent status and configure analytics
  const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
  
  if (consentStatus === 'accepted') {
    // User has accepted cookies - enable analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  } else if (consentStatus === 'declined') {
    // User has declined cookies - disable analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  } else {
    // No choice made yet - show banner
    showCookieBanner();
  }
});
