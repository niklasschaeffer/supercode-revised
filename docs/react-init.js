// Reliable React initialization script for GitHub Pages
console.log('=== React Initialization Script Starting ===');

async function initializeReactApp() {
  try {
    console.log('Loading React modules...');
    
    // Load all required modules
    const [vendor, radix, icons, main] = await Promise.all([
      import('./assets/vendor-DD48japz.js'),
      import('./assets/radix-D5tVKWxL.js'),
      import('./assets/icons-Cywx8hFR.js'),
      import('./assets/index-U5IgZAcl.js')
    ]);
    
    console.log('All modules loaded successfully');
    console.log('Vendor module keys:', Object.keys(vendor));
    
    // Find React and ReactDOM in vendor exports
    const react = vendor.R || vendor.b || vendor.r;
    const reactDOM = vendor.a;
    
    if (!react || !reactDOM) {
      throw new Error('Could not find React/ReactDOM in vendor modules');
    }
    
    if (!reactDOM.createRoot) {
      throw new Error('ReactDOM.createRoot not available');
    }
    
    console.log('React and ReactDOM found');
    
    // Get root element
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found');
    }
    
    // Check if already initialized
    if (rootElement.children.length > 0) {
      console.log('React already initialized');
      return;
    }
    
    console.log('Creating React root...');
    const root = reactDOM.createRoot(rootElement);
    
    // Try to get the App component from the main module
    let AppComponent = null;
    
    // The main module should export the App, try different ways to access it
    if (main.default) {
      AppComponent = main.default;
    } else if (main.App) {
      AppComponent = main.App;
    } else {
      // Create a fallback component if we can't find the App
      console.log('Could not find App component, creating fallback...');
      AppComponent = () => react.createElement('div', {
        style: {
          padding: '40px 20px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }
      }, [
        react.createElement('h1', { 
          key: 'title',
          style: { color: '#2563eb', marginBottom: '20px' }
        }, 'SuperCode Framework'),
        react.createElement('p', { 
          key: 'subtitle',
          style: { fontSize: '18px', color: '#64748b', marginBottom: '30px' }
        }, 'Multi-Agent Development Platform'),
        react.createElement('div', {
          key: 'status',
          style: {
            padding: '20px',
            backgroundColor: '#f0f9ff',
            border: '1px solid #0ea5e9',
            borderRadius: '8px',
            marginBottom: '20px'
          }
        }, '✅ React Successfully Initialized'),
        react.createElement('p', {
          key: 'desc',
          style: { color: '#475569', lineHeight: '1.6' }
        }, 'The SuperCode Framework provides a comprehensive multi-agent development environment for modern software projects.')
      ]);
    }
    
    console.log('Rendering React app...');
    root.render(react.createElement(react.StrictMode, null, 
      react.createElement(AppComponent)
    ));
    
    console.log('✅ React initialization completed successfully');
    
  } catch (error) {
    console.error('❌ React initialization failed:', error);
    
    // Show error message on page
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; font-family: system-ui, sans-serif;">
          <h1 style="color: #dc2626;">❌ React Initialization Failed</h1>
          <p style="color: #6b7280;">Error: ${error.message}</p>
          <p style="color: #9ca3af; font-size: 14px;">Please check the console for more details.</p>
        </div>
      `;
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeReactApp);
} else {
  initializeReactApp();
}

// Also try after a delay as backup
setTimeout(initializeReactApp, 1000);