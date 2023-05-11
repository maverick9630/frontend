import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  height: 100px;
  padding: 0 30px;
`;

const Logo = styled.img`
  font-size: 2px;
  font-weight: bold;
  color: #ed0000;
  text-decoration: none;
  height: 20%;
  width : 20%;
`;

const LoginButton = styled.button`
  background-color: transparent;
  border: 2px solid #333;
  border-radius: 20px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem 2rem;
  transition: all 0.3s ease;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
    margin-left : 10%;
  height: 300px;
  padding: 0 16px;
`;

const NavLink = styled.a`
  color: #000000;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
`;

function Navbarr() {
    return (
      <Nav>
        <div>
      
        <NavbarWrapper>
        <Logo src = {logo}>
        
        </Logo>
      
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Search</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Blogs</NavLink>
        <NavLink href="#">Contact Us</NavLink>
        </NavbarWrapper>
    
      </div>
        <LoginButton>Login</LoginButton>
      </Nav>
    );
  }

export default Navbarr