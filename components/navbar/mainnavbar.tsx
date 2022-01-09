import React, { FC, useState} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoImage from "../logosvg/svg";

export type navBarLink = {
    linkName: string;
    href: string;
}

export interface mainNavBarProps {
    linkList: navBarLink[];
    Logo: any;
    userAvatar?:boolean;
}

export const MainNavbar: FC<mainNavBarProps> = ({...props}) =>{
    const [avatarOptionsAnchorEl,setavatarOptionsAnchorEl] = useState(null)
    const open= Boolean(avatarOptionsAnchorEl);
    const avatarMenuHandleClick = (event:any):void =>{
        setavatarOptionsAnchorEl(event.currentTarget);
    }
    const avatarMenuHandleClose = ():void =>{
        setavatarOptionsAnchorEl(null)
    }

    return <>
        <Navbar className = 'main-header' fixed = 'top' >
            <Container>
                <Navbar.Brand href="/" className = 'main-header-logo'>
                    <LogoImage  imagePath = {props.Logo}/>
                </Navbar.Brand>
                <Nav className ='main-header-nav-links'>
                {
                    props.linkList.map((singleLink,i )=> {
                        return (
                            <Nav.Link href={singleLink.href} className = 'main-header-single-link' key ={i} > {singleLink.linkName} </Nav.Link>
                        )
                    })
                }
                {
                    props.userAvatar ? (
                        <>
                            <Avatar 
                                sx = {{marginLeft: '2em'}}
                                onClick={avatarMenuHandleClick}
                            >
                                Y
                            </Avatar>
                            <Menu
                                id="basic-menu"
                                anchorEl={avatarOptionsAnchorEl}
                                open={open}
                                onClose={avatarMenuHandleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={avatarMenuHandleClose}>Profile</MenuItem>
                                <MenuItem onClick={avatarMenuHandleClose}>My account</MenuItem>
                                <MenuItem onClick={avatarMenuHandleClose}>Logout</MenuItem>
                            </Menu>

                        </>
                    ) : null
                }
                </Nav>
            </Container>
        </Navbar>
    </>
} 