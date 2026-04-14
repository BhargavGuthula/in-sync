import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import LoginModal from '../auth/LoginModal.jsx';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginModal />} />
        </Routes>
    )
}