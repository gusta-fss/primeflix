import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function Header(){
    return(
        <header>
            <Link className='Logo' to='/'>
                <img src={Logo} alt="Logo do Prime Flix"></img>
            </Link>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
        </header>
    )
}

export default Header;
