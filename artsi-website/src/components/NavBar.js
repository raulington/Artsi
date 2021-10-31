import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "./artsi-logo.png";
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
    const imgStyle = {
        height: '35%',
        width: '35%',
    };
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="Logo" style={imgStyle}/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/learn' className='nav-links' onClick={closeMobileMenu}>
                            Learn
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Login</Button>}
            </nav>
        </>
    )
}

export default NavBar
