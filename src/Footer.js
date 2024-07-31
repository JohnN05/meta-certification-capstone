import logo from './assets/Logo.svg'
function Footer(){
    return(
        <nav className="footer">
            <section>
                <img alt='Little Lemon Logo' src={logo}></img>
            </section>
            
            <section>
                <h3>Navigation</h3>
                <ul>
                    <li><a href='./index.html'>Home</a></li>
                    <li><a href='./about.html'>About</a></li>
                    <li><a href='./menu.html'>Menu</a></li>
                    <li><a href='/reservations.html'>Reservations</a></li>
                    <li><a href='./order.html'>Order Online</a></li>
                    <li><a href='./login.html'>Login</a></li>
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