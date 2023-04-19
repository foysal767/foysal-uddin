import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const [mode, setMode] = useState("");

    useEffect(() => {
        const userPref = window.localStorage.getItem("theme");
        setMode(userPref)
    }, []);

    useEffect(() => {
        if (mode === "") {
            return
        } else {
            if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } else {
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode]);

  return [mode,setMode]
}

export default useThemeSwitcher