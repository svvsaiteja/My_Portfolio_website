// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import logo from '../../assets/my-avatar.png';
import menu from '../../assets/menu-aqua.png';
// import contantme from '../../assets/contact.png'; 
import { Link } from "react-scroll";
import './navbar.css';

function Navbar() {
  const [showMenu,setShowMenu] = useState(false);

  return (
      
      <nav className="navbar">
          <img src={logo} className='logo' alt="" />
          <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
          </div>
      {/* <button className="desktopMenuBtn" onClick={() => {
              document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
          }}>
              <img src={contantme} className='desktopMenuImg' alt="" />
              Contact Me
      </button> */}
      
      <img src={menu} className='mobMenu' alt="" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
          </div>
      

      </nav>
      

  );
}

export default Navbar;