import React from 'react'
import {SidebarContainer,SideBarLink,SideBarMenu,SideBarWrapper,SideBtnWrap,SideBarRoute} from './SidebarElements'

function Sidebar({isOpen,toggle}) {
  return (
   <>
    <SidebarContainer isOpen={isOpen} toggle={toggle} onClick={toggle}>
<SideBarWrapper>
    <SideBarMenu>
        <SideBarLink to='about' onClick={toggle}>
        About
        </SideBarLink>
        <SideBarLink to='discover' onClick={toggle}>
        Discover
        </SideBarLink>
        <SideBarLink to='services' onClick={toggle}>
        Services
        </SideBarLink>
        <SideBarLink to='signup' onClick={toggle}>
        Sign up
        </SideBarLink>
    </SideBarMenu>
    <SideBtnWrap>
        <SideBarRoute to='/signin'>Sign In</SideBarRoute>
    </SideBtnWrap>
</SideBarWrapper>
    </SidebarContainer>
   </>
  )
}

export default Sidebar
