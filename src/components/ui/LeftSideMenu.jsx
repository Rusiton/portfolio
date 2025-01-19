import { useRef } from 'react';
import '../css/left-side-menu.css';

function LeftSideMenu(){
    const side_menu_ref = useRef(null);

    setTimeout(() => {
        side_menu_ref.current.classList.add("animated");
    }, 3000);

    return(
        <div className="left-side-menu" ref={side_menu_ref}>
            <ul className="left-side-menu-list">
                <li className="left-side-menu-item"><a href="./assets/pdf/curriculum-galasso-santiago.pdf" target="_blank" id="section_curriculum_link"><i className="fa-solid fa-book fa-2x"></i></a></li>
                <li className="left-side-menu-item"><a href="https://github.com/Rusiton" target="_blank" className="link-github"><i className="fa-brands fa-github fa-2x"></i></a></li>
                <li className="left-side-menu-item"><a href="https://gitlab.com/Rusiton" target="_blank" className="link-gitlab"><i className="fa-brands fa-gitlab fa-2x"></i></a></li>
                <li className="left-side-menu-item"><a href="https://linkedin.com/in/galassosantiago/" target="_blank" className="link-linkedin"><i className="fa-brands fa-linkedin fa-2x"></i></a></li>
            </ul>
        </div>
    );
}

export default LeftSideMenu;