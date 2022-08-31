import React from "react";
import SearchBar from "../molecules/searchbar";
import { styled } from "@mui/styles";
import { Button } from "@mui/material";

const NavMenu = styled(Button)({
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textDecoration: "none"
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
    </Nav>
    );
}