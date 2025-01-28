import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../assest/logo.svg";
import search from "../assest/search-icon.svg";
import cross from "../assest/icon-close.svg"
import hamburger from "../assest/icon-hamburger.svg"
const Navbar = () => {
  // State to toggle the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-[100%] max-w-[1440px] flex">
      <div className='flex items-center w-[100%] justify-between pt-4 font-semibold font-sans'>
        <div>
          <img src={logo} alt="logo" className='mb-0' />
        </div>

        {/* Mobile Menu Toggle Buttons */}
        <div onClick={toggleMenu} className='m-5 z-10 cursor-pointer'>
          {isMenuOpen ? <><img src={cross} alt="" /></> : <><img src={hamburger} alt="" /></>}
        </div>

        {/* Mobile menu items */}
        <Nav isOpen={isMenuOpen}>
          <ul className="flex items-center gap-5">
            <li>Home</li>
            <li>Our Service</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About us</li>
            <li><img src={search} className="" alt="Search icon" /></li>

            <button className='bg-[#FFA229] rounded-[4px] text-white py-3 px-6 align-center justify-center'>
              Talk to Expert
            </button>
          </ul>
        </Nav>
      </div>
    </div>
  );
};

// Styled components for responsive navbar
const Nav = styled.nav`
  @media (max-width: 950px) {
    position: absolute;
    top: 2.3rem;
    width: 100%;
    
    ul {
      flex-direction: column;
      background-color: white;
      padding: 1rem;
      
      display: ${props => (props.isOpen ? 'flex' : 'none')}; /* Toggle visibility */
    }
  }
`;

export default Navbar;
