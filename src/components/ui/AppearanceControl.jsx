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
            <button onClick={onLanguajeChange}><img src={context.languaje === 'english' ? './src/assets/svg/en.svg' : './src/assets/svg/es.svg'} /></button>
            <button onClick={onThemeChange}><img src={context.theme === 'dark' ? './src/assets/svg/dark.svg' : './src/assets/svg/light.svg'} /></button>
        </div>
    );
}

export default AppearanceControl;