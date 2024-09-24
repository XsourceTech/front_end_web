import React, { Route, Routes } from 'react-router-dom';
import './global-variable.scss';
// import Home from './pages/Home/Home';
// import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Home from './pages/Landing/Home';
import Activate from './pages/Login/Activate';
import Redirect from './pages/Login/Redirect';
import Reset from './pages/Login/Reset';
import Dashboard from './pages/Dashboard/Dashboard';
import ChatBot from './pages/Dashboard/ChatBot';
// import Home from './pages/Landing/Home';
// import NotFound from './pages/Error/Error';

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset/:token" element={<Reset />} />
                <Route path="/activate/:token" element={<Activate />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/chatbot' element={<ChatBot />} />
                <Route path="/redirect/:redirect" element={<Redirect />} />
                {/* <Route path="/userinfo" element={<UserInfo />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;