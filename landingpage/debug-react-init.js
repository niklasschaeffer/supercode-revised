// Debugging script to check React initialization
console.log('=== React Debug Script Loading ===');

// Function to initialize React with fallback
function initializeReactWithFallback() {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  
  // Check if React is already initialized
  if (rootElement.children.length > 0) {
    console.log('React appears to be already initialized');
    return;
  }
  
  console.log('Attempting React initialization...');
  
  // Try to import and initialize React
  Promise.all([
    import('./assets/vendor-DD48japz.js'),
    import('./assets/radix-D5tVKWxL.js'),
    import('./assets/icons-Cywx8hFR.js'),
    import('./assets/index-CiLZasBt.js')
  ]).then(([vendor, radix, icons, main]) => {
    console.log('All modules loaded for fallback initialization');
    
    // Find React and ReactDOM
    const react = vendor.R || vendor.b || vendor.r;
    const reactDOM = vendor.a;
    
    if (!react || !reactDOM) {
      console.error('Could not find React/ReactDOM in vendor modules');
      return;
    }
    
    if (!reactDOM.createRoot) {
      console.error('ReactDOM.createRoot not available');
      return;
    }
    
    try {
      console.log('Creating React root...');
      const root = reactDOM.createRoot(rootElement);
      
      // Create a simple fallback component
      const fallbackApp = react.createElement('div', {
        style: {
          padding: '20px',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center'
        }
      }, [
        react.createElement('h1', { key: 'title' }, 'SuperCode Framework'),
        react.createElement('p', { key: 'desc' }, 'Multi-Agent Development Platform'),
        react.createElement('p', { key: 'status' }, '✅ React Successfully Initialized (Fallback Mode)'),
        react.createElement('div', { 
          key: 'debug',
          style: { 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '5px',
            fontSize: '12px'
          }
        }, 'Debug: React initialized via fallback script')
      ]);
      
      console.log('Rendering fallback app...');
      root.render(fallbackApp);
      
      console.log('✅ React fallback initialization successful');
      
    } catch (error) {
      console.error('Error during React fallback initialization:', error);
    }
    
  }).catch(error => {
    console.error('Error loading modules for fallback:', error);
  });
}

// Try initialization immediately and also after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeReactWithFallback);
} else {
  initializeReactWithFallback();
}

// Also try after a delay in case there are timing issues
setTimeout(initializeReactWithFallback, 1000);