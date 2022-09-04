import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Logout from "../pages/logout";

export default function Body() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />}/>
            </Routes>
        </BrowserRouter>
    );
}
