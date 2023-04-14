
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 3;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen?'100%':'0')};
top: ${({isOpen})=>(isOpen?'0':'-100%')}; 

`
export const SideBarWrapper = styled.div`
color: #fff;
`
export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
justify-content: center;
position: relative;
align-items: center;
left: -22.5px;

@media screen and (max-width:480px) {
    grid-template-rows: repeat(6,60px);
}

`

export const SideBarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out ;
color: #fff;

&:hover{
    transition: all 0.2s ease-in-out;
    color: #01bf71;
}

`
export const SideBtnWrap = styled(LinkR)`
display:flex;
justify-content: center;
text-decoration: none;
color: #fff;
`
export const SideBarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
text-decoration: none;
color: #010606;
font-size: 16px;
outline: none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out ;


&:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
}

`


