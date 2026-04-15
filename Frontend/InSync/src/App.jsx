import './App.css'
import LoginModal from './components/auth/LoginModal.jsx'
import { useState } from 'react';
import Navbar from "./components/small/Navbar.jsx";
import AppRoutes from './components/navigation/AppRoutes.jsx';
import NowPlaying from './components/small/NowPlaying.jsx';
function App() {
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  return (
    // {isLoginModalOpen && 
    //     <LoginModal  onClose={() => setIsLoginModalOpen(prev => !prev)} />}
    <main>
      <Navbar />   
      <section className="app-content">
        <AppRoutes />
        
      </section>
      <NowPlaying />
    </main>
  )
}

export default App
