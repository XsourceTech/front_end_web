import { Route, Routes } from 'react-router-dom';
import './global-variable.scss';
// import Home from './pages/Home/Home';
// import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Activate from './pages/Login/Activate';
// import UserInfo from './pages/Login/UserInfo';
import Reset from './pages/Login/Reset';
// import Home from './pages/Landing/Home';
// import NotFound from './pages/Error/Error';

function App() {
    return (
        <div className="container">
            <Routes>
                {/* <Route path="/about" element={<About />} */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset/:token" element={<Reset />} />
                <Route path="/activate/:token" element={<Activate />} />
                {/* <Route path="/userinfo" element={<UserInfo />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
