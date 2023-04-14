import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Nav =styled.nav`
background-color:${({scrollNav})=>(scrollNav?'transparent':'#000')};
height:80px;
margin-top: -80px; 
display :flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 2;

@media screen and (max-width:960px){
    transition: 0.8 all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
 padding: 0 24px;
max-width: 1100px;


`
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display:flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
user-select: none;
`

export const MobileIcon =styled.div`
display: none;

@media screen and (max-width:768px) {
    display:block;
    position:fixed;
    top:-7px;
    right:0;
    transform:translate(-100%,60%); 
    font-size:1.8rem ;
    cursor: pointer;
    z-index: 99999;
}
`
export const NavMenu =styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
position: relative;
top: 20%;

@media screen and (max-width: 768px) {
    display: none;
}

`

export const NavItem =styled.li`
height: 80px;
`
export const NavLinks =styled(LinkS)`
 color: #fff;
 display:flex;
 text-decoration:none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 user-select: none;

 &.active{
    border-bottom: 3px solid #01bf71;
 }
`
 export const Navbtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
  border-radius:50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color: #010606;
  }
`
