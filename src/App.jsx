import { useState, createContext } from "react";

import AppearanceControl from "./components/ui/AppearanceControl";
import PortfolioGithub from "./components/ui/PortfolioGithub";
import Header from "./components/ui/Header";
import LeftSideMenu from "./components/ui/LeftSideMenu";
import Content from "./components/ui/Content";
import Swiper from "./components/ui/Swiper";

export const Context = createContext();

function App(){

    const [languaje, setLanguaje] = useState("english");
    const [theme, setTheme] = useState("dark");
    const [section, setSection] = useState("Introduction");
    const [visitedSections, setVisitedSections] = useState([]);

    const updateLanguaje = () => {
        if(languaje === "english"){
            setLanguaje("spanish");
        }
        else{
            setLanguaje("english");
        }
    }

    const updateTheme = () => {
        if(theme === "dark"){
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    }

    const updateSection = ({target}) => {
        if(target.tagName === "I"){
            const id = target.parentNode.id.replace("header_button_", "");
            const new_section = id.charAt(0).toUpperCase() + id.slice(1);

            if (new_section === section) return;

            document.querySelector(".swiper-container").classList.add("swipe");

            setTimeout(() => {
                updateVisitedSections(section);
                setSection(new_section);
                document.querySelectorAll(".header-section-item").forEach( li => {
                    if(li === target.parentNode.parentNode){
                        li.classList.add("selected");
                    }
                    else{
                        li.classList.remove("selected");
                    }
                });
            }, 450);
            
            setTimeout(() => {
                document.querySelector(".swiper-container").classList.remove("swipe");
            }, 900);
        }
    }

    const updateVisitedSections = (new_section) => {
        if(!visitedSections.includes(new_section)){
            setVisitedSections([...visitedSections, new_section]);
        }
    }
    

    
    return(
        <Context.Provider value={{languaje, theme, section, visitedSections}}>
            <div id="wrapper" className={theme}>
                <AppearanceControl onLanguajeChange={updateLanguaje} onThemeChange={updateTheme} />
                <PortfolioGithub />
                <Header onSectionChange={updateSection} />
                <LeftSideMenu />
                <Content />
                <Swiper />
            </div>
        </Context.Provider>
    )
}

export default App;