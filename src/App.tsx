import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
// import NotFound from './pages/Error/Error';

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} /> */}
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
