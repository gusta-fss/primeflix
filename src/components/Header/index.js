import './style.css';
import logo from '../../assets/logo.png'

function Header(){
    return(
        <header>
            <img src={logo} alt="logo primeflix"></img>
        </header>
    )
}

export default Header;
