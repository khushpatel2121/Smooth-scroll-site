import React,{useState,useEffect} from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,Navbtn,NavBtnLink} from "./navbarElements";
import Hamburger from "hamburger-react"



function Navbar({toggle,isOpen}) {
 
   const [scrollNav,setNav] = useState(true);
  
   const changeNav = ()=>{
    if(window.scrollY >= 80){
        setNav(false);
    }
    else{
        setNav(true);
    }
   }

   useEffect(()=>{
window.addEventListener('scroll',changeNav)
 },
[]
   )
  return (
  <>
 <MobileIcon onClick={toggle}>
              <Hamburger color="#fff" toggled={isOpen} toggle={toggle}></Hamburger>
               
            </MobileIcon>
    <Nav scrollNav={scrollNav}>
    
        <NavbarContainer>
            <NavLogo to='/'
            smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
                dolla
            </NavLogo>
           
           <NavMenu>
            <NavItem>
                <NavLinks to='about'
                smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
                 About
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='discover'
                smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
                 Discover
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='services'
                smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
                 Services
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='signup'
                smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
                 Sign up
                </NavLinks>
            </NavItem>
            </NavMenu>
            <Navbtn>
                <NavBtnLink to="/singup"
                >
                    Sign up
                </NavBtnLink>
            </Navbtn>
           
        </NavbarContainer>
    </Nav>
  </>
  )
}

export default Navbar
