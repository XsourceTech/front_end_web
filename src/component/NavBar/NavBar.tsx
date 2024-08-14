import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/logo.png';
import Xbutton from '../Xbutton';

function CustomLink({
    to,
    children,
    ...props
}: {
    to: string;
    children: string;
}) {
    return (
        <li>
            <a href={to} {...props}>
                {children}
            </a>
        </li>
    );
}

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link to="#home" className="site-title">
                <img src={logo} alt="logo" className="nav-logo" />
            </Link>
            <div className="burger-menu-icon" style={{backgroundColor: 'red'}}onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </div>
            <div className="nav-middle">
                <CustomLink to="#home">主页</CustomLink>
                <CustomLink to="#about">关于</CustomLink>
                <CustomLink to="#plan">价格</CustomLink>
                <CustomLink to="#team">成员</CustomLink>
            </div>
            <div className="nav-right" style={{marginRight: '3rem'}}>
                <Link to="/login">登录</Link>
                <Xbutton text="注册" outlined={false} width="5rem" onClick={() => {navigate('/signup')}} startIcon={<></>} />
            </div>

        </nav>
    );
}
