import React, {useState, useEffect} from "react";
import "../styles/Header.css";


function Header () {
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
            </div>
        </div>
    )
}

export default Header;
