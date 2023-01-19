
import {AppBar, Toolbar, styled, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: #111111
`

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right: 20px;
    color: inherit;
    text-decoration:none;

`

const NavBar = () => {               //functional based components
    return ( 
        <Header position='static'>                {/* replacing AppBar with Header */}
        <Toolbar>
            <Tabs to='/'>Code for interview</Tabs>    {/* replacing p with with Tabs  and changing to navlink*/}
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>
        </Toolbar>
       </Header>
      );
    }

export default NavBar; 