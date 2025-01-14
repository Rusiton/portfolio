import { Context } from '../../App';
import { useContext } from "react";

import dictionary from "../../assets/json/header-sections.json";

function HeaderSections({onSectionChange}){
    const context = useContext(Context);
    let new_dictionary = {};

    switch (context.languaje) {
        case "english":
            new_dictionary = dictionary.en;
            break;
    
        case "spanish":
            new_dictionary = dictionary.es;
            break;
    }

    return(
        <ul className="header-sections">
            <li className="header-section-item selected"><p>{new_dictionary.introduction}</p><button id="header_button_introduction" className="header-section-item-button" onClick={onSectionChange}><i className="fa-solid fa-plane-arrival fa-3x"></i></button></li>
            <li className="header-section-item"><p>{new_dictionary.about}</p><button id="header_button_about" className="header-section-item-button" onClick={onSectionChange}><i className="fa-solid fa-circle-info fa-3x"></i></button></li>
            <li className="header-section-item"><p>{new_dictionary.projects}</p><button id="header_button_projects" className="header-section-item-button" onClick={onSectionChange}><i className="fa-solid fa-briefcase fa-3x"></i></button></li>
            <li className="header-section-item"><p>{new_dictionary.contact}</p><button id="header_button_contact" className="header-section-item-button" onClick={onSectionChange}><i className="fa-solid fa-envelope fa-3x"></i></button></li>
        </ul>
    );
}

export default HeaderSections;