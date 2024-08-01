import logo from './assets/Logo.svg';
import burger from './assets/burger.svg';
import {Link} from 'react-router-dom';

function Header(){
    return(
        
        <nav className="Header">
            
            <ul>
                <li className="mobileShow" ><img alt="burger icon" height="25px"src={burger}></img></li>
                <li className="mobileHide"><img alt="Little Lemon Logo" src={logo}></img></li>
                <li className="mobileHide"><Link to="/">Home</Link></li>
                <li className="mobileHide"><Link to="/">About</Link></li>
                <li className="mobileHide"><Link to="/booking">Reservations</Link></li>
                <li className="mobileHide"><Link to="/">Order online</Link></li>
                <li className="mobileHide"><Link to="/">Login</Link></li>
            </ul>
            <ul className='sidebar'>
                <li><img alt="Little Lemon Logo" src={logo}></img></li>
                <li><a href='./index.html'>Home</a></li>
                <li><a href='./about.html'>About</a></li>
                <li><a href='./reservations.html'>Reservations</a></li>
                <li><a href='./order.html'>Order Online</a></li>
                <li><a href='./login.html'>Login</a></li>
            </ul>
        </nav>

    );
}

export default Header;