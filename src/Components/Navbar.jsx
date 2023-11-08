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
        <Link to='main' className='logo'>
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox'id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='#'>Header</Link></li>
            <li><Link to='#'>Products</Link></li>
            <li><Link to='#'>About</Link></li>
            <li><Link to='#'>Contacts</Link></li>

        </ul>

    </nav>
  )
}

export default Navbar