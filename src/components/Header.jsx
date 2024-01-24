import React, { useState, useEffect } from "react";
import "../styles/Header.css";


function Header () {
const [theme, setTheme] = useState("light");
useEffect(() => {
if(theme === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
}, [theme])

const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
}
    return (
        <div>
            <div className=" static opacity-90 h-60 w-full mx-auto text-center bg-center bg-cover  bg-no-repeat bg-[url('..\src\images\casey-horner-flood.jpg')]">
                <h1 className="pt-3 text-white text-7xl text-left indent-8">Floody-Hell</h1>
                <p className=" indent-5 pt-2 text-white font-bold text-2xl text-left ">Find up to date flood information plotted onto a polygon map.</p>
                <button onClick={handleThemeSwitch} className="absolute top-0 right-0 rounded bg-black text-white ">Dark Mode</button>
            </div>
        </div>
    )
}

export default Header;