import logo from './assets/Logo.svg';
import burger from './assets/burger.svg';
import './styles.css';

function Header(){
    return(
        
        <nav className="header">
            
            <ul>
                <li className="mobileShow"><img alt="burger icon" src={burger}></img></li>
                <li className="mobileHide"><img alt="Little Lemon Logo" src={logo}></img></li>
                <li className="mobileHide"><a href='./index.html'>Home</a></li>
                <li className="mobileHide"><a href='./about.html'>About</a></li>
                <li className="mobileHide"><a href='./reservations.html'>Reservations</a></li>
                <li className="mobileHide"><a href='./order.html'>Order Online</a></li>
                <li className="mobileHide"><a href='./login.html'>Login</a></li>
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