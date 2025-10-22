import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Agents } from "@/components/Agents"
import { Installation } from "@/components/Installation"
import { Footer } from "@/components/Footer"
import { DocumentationRouter } from "@/components/docs/DocumentationRouter"

// Main landing page component
function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <Agents />
      <Installation />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Documentation routes - handled by DocumentationRouter */}
        <Route path="/docs/*" element={<DocumentationRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App