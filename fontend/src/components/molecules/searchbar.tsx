import { styled } from "@mui/styles";
import React from "react";

const Search = styled("div")({
    padding: "4px",
    border: ".5px solid rgb(194, 194, 194)",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "300px",
    opacity: "0.7",
});

const Input = styled("input")({
    border: "none",
    outline: "none",
    fontFamily: 'Airbnb Cereal App Book',
    marginLeft: "16px",
    color: "rgb(82, 82, 82)",
    fontWeight: "bold",
    minWidth: "250px",
})

const Icon = styled("div")({
    height: "35px",
    width: "35px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "ButtonHighlight",
    }
});

// const I = styled("i")({
//     width: "50%",
//     margin: "0 auto",
// });

export default function SearchBar() {
    return(
        <Search>
            <Input type="text" name="" placeholder="Type to search"/>
            <Icon>
                <i className="fa-solid fa-magnifying-glass"></i>
            </Icon>
        </Search>
    );
}