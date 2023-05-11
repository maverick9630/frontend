import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 2px;
  font-weight: bold;
  color: #ed0000;
  text-decoration: none;
  height: 10%;
  width : 10%;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }

  & a {
    color: #fff;
    text-decoration: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
        
      <div>
      <Logo>
        <img src={logo} alt="logo" />
        </Logo>
        <a href="/">Logo</a>
      </div>
      <NavLinks>
        <NavLink>
          <a href="/">Home</a>
        </NavLink>
        <NavLink>
          <a href="/">About</a>
        </NavLink>
        <NavLink>
          <a href="/">Contact</a>
        </NavLink>
      </NavLinks>
      <HamburgerMenu onClick={toggleMenu}>
        <span>&#9776;</span>
      </HamburgerMenu>
      {isOpen && (
        <NavLinks>
          <NavLink>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
            <a href="/">About</a>
          </NavLink>
          <NavLink>
            <a href="/">Contact</a>
          </NavLink>
        </NavLinks>
      )}
    </Nav>
  );
};

export default Navbar;