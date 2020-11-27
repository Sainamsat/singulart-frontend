import React, {useState, useEffect} from 'react';
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBtnRoute,
} from './SidebarElements';
import {projectAuth} from '../../firebase/config';
import {Redirect} from 'react-router-dom';
import {Button} from '../ButtonElement';

const Sidebar = ({ isOpen, toggle }) => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    });

  }, []);

  const userLogout = () => {
    projectAuth.signOut();
    return (
      <Redirect to='/' />
    )
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {loggedIn ? <Button to='signup' primary={1} dark={1} onClick={() => userLogout()}>Logout</Button> : <SideBtnRoute to='/signin'>Sign In</SideBtnRoute>}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
