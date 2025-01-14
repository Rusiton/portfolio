import { Context } from '../../App';
import { useContext } from "react";

import dictionary from '../../assets/json/portfolio-github.json';
import '../css/portfolio-github.css';

function PortfolioGithub(){
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

    setTimeout(() => {
        document.querySelector(".portfolio-github").classList.add("animated");
    }, 2800);

    return(
        <div className="portfolio-github">
            <div className="logo-container">
                <a href="https://github.com/Rusiton/portfolio" target="_blank">
                    <p>{new_dictionary.madeWith}</p>
                    <i className="fa-brands fa-react fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default PortfolioGithub;