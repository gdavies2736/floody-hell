<<<<<<< HEAD
import React, {useState, useEffect} from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> d9b243fa61e642cfd8c4d7b4c4ae78503df191e9
import "../styles/Header.css";


function Header () {
<<<<<<< HEAD
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        document.body.classList.toggle("dark", darkMode)
      }, [darkMode])
      
      const changeToDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return (
        <div>
            <div className="static opacity-90 h-60 w-full mx-auto text-center bg-center bg-cover  bg-no-repeat bg-[url('..\src\images\casey-horner-flood.jpg')]">
                <h1 className="pt-4 text-white text-8xl text-left indent-8">Floody-Hell</h1>
                <p className="pt-4 indent-5 text-white font-bold text-2xl text-left ">Find up to date flood information plotted onto a polygon map.</p>
                <button onClick={changeToDarkMode} className="absolute self-end rounded bg-black text-white ">{darkMode ? 'light mode':'dark mode'}</button>
=======
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
                <h1 className="pt-3 text-white text-7xl text-left indent-8">Floody Hell</h1>
                <p className=" indent-5 pt-2 text-white font-bold text-2xl text-left ">Find up to date flood information plotted onto a polygon map.</p>
                <button onClick={handleThemeSwitch} className="absolute top-0 right-0 rounded bg-black text-white ">Dark Mode</button>
>>>>>>> d9b243fa61e642cfd8c4d7b4c4ae78503df191e9
            </div>
        </div>
    )
}

export default Header;
