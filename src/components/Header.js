import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      
      
      <h2><img className="logo" src="https://iili.io/2D30diB.png" alt="my logo img" /><b>Shop Stopper </b></h2>
      </NavLink>
      
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  
    .logo{
  width: 50px;
height: 40px;
margin-right: 16px;
}
  
`;
export default Header;
