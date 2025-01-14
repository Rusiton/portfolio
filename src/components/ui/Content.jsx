import { Context } from '../../App';
import { useContext } from 'react';

import Introduction from '../../pages/Introduction/Introduction';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

import '../css/content.css'

function Content(){
    const context = useContext(Context);

    const getSection = () => {
        switch (context.section) {
            case "Introduction":
                return <Introduction />
                break;

            case "About":
                return <About />
                break;

            case "Projects":
                return <Projects />
                break;

            case "Contact":
                return <Contact />
                break;
        }
    }
    
    return(
        <main>
            <div className="main-content">
                { getSection() }
            </div>
        </main>
    );
}

export default Content;