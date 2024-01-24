import React from "react";
import "../styles/Header.css";


function Header () {

    return (
        <div>
            <div className=" opacity-90 h-60 w-full mx-auto text-center bg-center bg-cover  bg-no-repeat bg-[url('..\src\images\casey-horner-flood.jpg')]">
                <button className=" rounded bg-black text-white ">Dark Mode</button>
                <h1 className="pt-3 text-white text-7xl text-left indent-8">Floody-Hell</h1>
                <p className=" indent-5 pt-4 text-white font-bold text-2xl text-left ">Find up to date flood information plotted onto a polygon map.</p>
            </div>
        </div>
    )
}

export default Header;