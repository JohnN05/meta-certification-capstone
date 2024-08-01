import logo from './assets/Logo.svg';
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <nav className="Footer">
            <section>
                <img alt='Little Lemon Logo' src={logo}></img>
            </section>
            
            <section>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/">Order online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </section>
            <section>
                <address>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </address>

            </section>
            <section>
                <h3>Social Media</h3>
                <ul>
                    <li><a href='https://facebook.com'></a>Facebook</li>
                    <li><a href='https://instagram.com'></a>Instagram</li>
                    <li><a href='https://pinterest.com'></a>Pinterest</li>
                </ul>
        </section>
        </nav>
    );
}

export default Footer;