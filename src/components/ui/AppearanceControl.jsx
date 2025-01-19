import { Context } from '../../App';
import { useContext } from 'react';

import '../css/appearance-control.css';

function AppearanceControl({onLanguajeChange, onThemeChange}){
    const context = useContext(Context);

    setTimeout(() => {
        document.querySelector(".appearance-control").classList.add("animated");
    }, 2800);

    return(
        <div className="appearance-control">
            <button onClick={onLanguajeChange}><img src={context.languaje === 'english' ? './assets/svg/en.svg' : './assets/svg/es.svg'} /></button>
            <button onClick={onThemeChange}><img src={context.theme === 'dark' ? './assets/svg/dark.svg' : './assets/svg/light.svg'} /></button>
        </div>
    );
}

export default AppearanceControl;