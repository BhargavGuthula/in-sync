import './App.css'
import LoginModal from './components/auth/LoginModal.jsx'
import { useState } from 'react'
function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  return (
    <main>
      <h1>InSync</h1>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </main>
  )
}

export default App
