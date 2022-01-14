import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from 'react-router-dom';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2>CRUD <span>APPLICATION</span></h2>
          <button className='nav-toggle' onClick={toggleLinks}>
            <MenuIcon></MenuIcon>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/allusers'>All Users</Link>
            </li>
            <li>
              <Link to='/adduser'>Add User</Link>
            </li>
          </ul>
        </div>
        <ul className='social-icons'>
            <li>
              <a href="https://www.facebook.com/"><FacebookIcon></FacebookIcon></a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en"><TwitterIcon></TwitterIcon></a>
            </li>
            <li>
              <a href="https://in.linkedin.com/"><LinkedInIcon></LinkedInIcon></a>
            </li>
            <li>
              <a href="https://www.instagram.com/"><InstagramIcon></InstagramIcon></a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
