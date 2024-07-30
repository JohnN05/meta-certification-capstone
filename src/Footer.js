import logo from './assets/Logo.svg'
function Footer(){
    return(
        <nav>
            <img alt='Little Lemon Logo' src={logo}></img>
            <section>
                <h3>Navigation</h3>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Reservations</a></li>
                    <li><a href=''>Order Online</a></li>
                    <li><a href=''>Login</a></li>
                </ul>
            </section>
            <section>
                <address>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href=''>Address</a></li>
                        <li><a href=''>Phone Number</a></li>
                        <li><a href=''>Email</a></li>
                    </ul>
                </address>

            </section>
            <section>
                <h3>Social Media</h3>
                <ul>
                    <li><a href=''></a>Facebook</li>
                    <li><a href=''></a>Instagram</li>
                    <li><a href=''></a>Pinterest</li>
                </ul>
        </section>
        </nav>
    );
}

export default Footer;