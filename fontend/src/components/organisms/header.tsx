import React, { useEffect, useState } from "react";
import SearchBar from "../molecules/searchbar";
import { styled } from "@mui/styles";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";

const NavMenu = styled(Button)({
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textDecoration: "none",
    color: "transparent",
});

const Nav = styled("nav")({
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 32px",
})

export default function Header() {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    
    useEffect(() => {
        console.log(isDropdownOpen);
    }, [isDropdownOpen]);

    return(
    <Nav>
        <img src="logo_stretch.png" alt=""/>
        <NavMenu>
            Home
        </NavMenu>
        <NavMenu>
            Hotels
        </NavMenu>
        <NavMenu>
            About Us
        </NavMenu>
        <SearchBar/>
            {(!isAuthenticated)? <NavMenu onClick={() => loginWithRedirect()}>Login</NavMenu> : <NavMenu onClick={() => setDropdownOpen(!isDropdownOpen)}>Hello {user?.name}</NavMenu>}
            {isDropdownOpen && <Profile/>}
    </Nav>
    );
}