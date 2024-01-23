import React from "react";
import "../styles/Header.css";

function Header () {
    return (
        <div className="opacity-100 h-60 w-full mx-auto text-center bg-center bg-cover  bg-no-repeat bg-[url('..\src\images\riverimage.jpg')]">
                <h1 className="pt-5 text-white text-7xl text-left indent-8">Floody-Hell</h1>
                <p className="indent-5 text-white font-semibold text-2xl text-left ">Find up to date flood information plotted onto a polygon map using our postcode search function.</p>
        </div>
    )
}

export default Header;