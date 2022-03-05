import React from "react";
import Logo from "../logo/logo.component";
import Switch from '@mui/material/Switch';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./sidebar.style.css";
import { Link } from "react-router-dom";


const label = { inputProps: { 'aria-label': 'Toggle sidebar' } };


const SideBar = ({ page }) => {
    const [state, setstate] = React.useState({
        collapsed: false,
    })


    return (
        <div className="side-bar">
            <ProSidebar collapsed={state.collapsed} rtl={false} toggled={true} breakPoint={"md"}>
                <SidebarHeader>
                    <Logo />
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="round">
                        <MenuItem active={page === "home" ? true : false} icon={<i className="fa-solid fa-house-user" />}>
                            Home
                            <Link to="/rooms"></Link>
                        </MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-street-view"></i>}>
                            Community
                            <Link to="/communities"/>
                        </MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-handshake"></i>}>
                            Rooms
                            <Link to="/rooms"></Link>
                        </MenuItem>
                        <SubMenu title="Chats" icon={<i className="fa-solid fa-comments"></i>}>
                            <MenuItem icon={<i className="fa-solid fa-circle-notch"></i>}>Person 1</MenuItem>
                            <MenuItem icon={<i className="fa-solid fa-circle-notch"></i>}>Person 2</MenuItem>
                            <MenuItem icon={<i className="fa-solid fa-circle-notch"></i>}>view all</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<i className="fa-solid fa-user"></i>}>Profil</MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-screwdriver-wrench"></i>}>Settings</MenuItem>
                        <MenuItem icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>}>
                            Logout
                            <Link to="/"></Link>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Switch {...label}
                    checked={!state.collapsed}
                    onChange={() => setstate({ collapsed: !state.collapsed})}
                    />
                </SidebarFooter>
            </ProSidebar>;
        </div>
    )
};

export default SideBar;