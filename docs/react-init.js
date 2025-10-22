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
      // Create a comprehensive fallback component if we can't find the App
      console.log('Could not find App component, creating enhanced fallback...');
      AppComponent = () => react.createElement('div', {
        style: {
          minHeight: '100vh',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }
      }, [
        react.createElement('header', {
          key: 'header',
          style: {
            padding: '20px 0',
            textAlign: 'center',
            color: 'white'
          }
        }, [
          react.createElement('h1', {
            key: 'title',
            style: { 
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }
          }, 'SuperCode Framework'),
          react.createElement('p', {
            key: 'subtitle',
            style: { 
              fontSize: '1.25rem',
              margin: '0',
              opacity: 0.9
            }
          }, 'Multi-Agent Development Platform')
        ]),
        react.createElement('main', {
          key: 'main',
          style: {
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }
        }, [
          react.createElement('section', {
            key: 'hero',
            style: {
              textAlign: 'center',
              marginBottom: '60px'
            }
          }, [
            react.createElement('div', {
              key: 'status',
              style: {
                display: 'inline-block',
                padding: '15px 30px',
                backgroundColor: 'rgba(34, 197, 94, 0.9)',
                color: 'white',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '30px',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
              }
            }, '✅ React Successfully Initialized'),
            react.createElement('p', {
              key: 'description',
              style: {
                fontSize: '1.125rem',
                color: 'white',
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto 40px auto',
                opacity: 0.95
              }
            }, 'A comprehensive multi-agent development framework that provides intelligent agents, specialized tools, and seamless orchestration for modern software projects.'),
            react.createElement('div', {
              key: 'actions',
              style: {
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }
            }, [
              react.createElement('a', {
                key: 'docs',
                href: 'https://github.com/niklasschaeffer/supercode-revised',
                target: '_blank',
                style: {
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#4f46e5',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }
              }, 'View Documentation'),
              react.createElement('a', {
                key: 'github',
                href: 'https://github.com/niklasschaeffer/supercode-revised',
                target: '_blank',
                style: {
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.2s ease'
                }
              }, 'View on GitHub')
            ])
          ]),
          react.createElement('section', {
            key: 'features',
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }
          }, [
            react.createElement('div', {
              key: 'feature1',
              style: {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }
            }, [
              react.createElement('h3', {
                key: 'f1title',
                style: { 
                  color: 'white', 
                  marginTop: '0',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }
              }, '🤖 Intelligent Agents'),
              react.createElement('p', {
                key: 'f1desc',
                style: { 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: '0'
                }
              }, 'Specialized AI agents for frontend, backend, security, testing, and more.')
            ]),
            react.createElement('div', {
              key: 'feature2',
              style: {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }
            }, [
              react.createElement('h3', {
                key: 'f2title',
                style: { 
                  color: 'white', 
                  marginTop: '0',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }
              }, '🔧 MCP Integration'),
              react.createElement('p', {
                key: 'f2desc',
                style: { 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: '0'
                }
              }, 'Seamless integration with Model Context Protocol servers and tools.')
            ]),
            react.createElement('div', {
              key: 'feature3',
              style: {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }
            }, [
              react.createElement('h3', {
                key: 'f3title',
                style: { 
                  color: 'white', 
                  marginTop: '0',
                  marginBottom: '15px',
                  fontSize: '1.25rem'
                }
              }, '🎯 Smart Orchestration'),
              react.createElement('p', {
                key: 'f3desc',
                style: { 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: '0'
                }
              }, 'Intelligent task decomposition and agent coordination for complex projects.')
            ])
          ])
        ]),
        react.createElement('footer', {
          key: 'footer',
          style: {
            textAlign: 'center',
            padding: '40px 20px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem'
          }
        }, [
          react.createElement('p', {
            key: 'footer-text',
            style: { margin: '0 0 10px 0' }
          }, 'Built with ❤️ using the SuperCode Framework'),
          react.createElement('div', {
            key: 'debug-info',
            style: {
              fontSize: '0.75rem',
              opacity: 0.5,
              marginTop: '20px'
            }
          }, 'Debug: React initialized via reliable fallback script')
        ])
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