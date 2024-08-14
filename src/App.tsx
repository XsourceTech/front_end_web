import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
// import Activate from './pages/Login/Activate';
// import UserInfo from './pages/Login/UserInfo';
// import Reset from './pages/Login/Reset';
import Home from './pages/Landing/Home';
// import NotFound from './pages/Error/Error';

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
