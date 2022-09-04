import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/styles";
import React from "react";

const Button = styled("button")({
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textDecoration: "none",
    height: "40px",
    borderRadius: "5px",
    padding: "5px",
    textTransform: "uppercase",
    "&:hover": {
        backgroundColor: "ButtonShadow"
    }
});

const Dropdown = styled("div")({
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: "50px",
    right: "40px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
});


export default function Profile() {
    const {logout} = useAuth0();

    return(
        <Dropdown>
            <Button>Profile</Button>
            <Button onClick={() => logout({ returnTo: "http://localhost:4000/logout" })}>Logout</Button>
        </Dropdown>
    );
}