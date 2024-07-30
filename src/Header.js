import logo from './assets/Logo.svg'
function Header(){
    return(

        <nav>
            <img alt="Little Lemon Logo" src={logo}></img>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''></a>About</li>
                <li><a href=''></a>Reservations</li>
                <li><a href=''>Order Online</a></li>
                <li><a href=''>Login</a></li>
            </ul>
        </nav>

    );
}

export default Header;