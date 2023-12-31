import React,{useState} from 'react'
import { Link } from 'react-scroll';
import logo from '../Components/logo1.png';


function Navbar() {
    const[nav,setNav]=useState(false);
    const chnageBackground =()=>{
        if(window.scrollY>=50)
        {
            setNav(true);
        }
        else
        {
            setNav(false);
        }
    }
    window.addEventListener('scroll',chnageBackground)
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' className='logo' smooth={true} duration={2000}>
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox'id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={2000}>Header</Link></li>
            <li><Link to='products' smooth={true} duration={2000} offset={-50}>Products</Link></li>
            <li><Link to='about'smooth={true} duration={2000} offset={-200}>About</Link></li>
            <li><Link to='contact'smooth={true} duration={2000}>Contacts</Link></li>

        </ul>

    </nav>
  )
}

export default Navbar