import './App.css'
import LoginModal from './components/auth/LoginModal.jsx'
import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true)
  return (
    <main>
      <Navbar />
      <section className="app-content">
        {isLoginModalOpen && 
        <LoginModal  onClose={() => setIsLoginModalOpen(prev => !prev)} />}
      </section>
    </main>
  )
}

export default App
