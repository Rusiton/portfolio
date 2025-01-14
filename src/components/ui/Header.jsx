import HeaderSections from './HeaderSections';
import '../css/header.css';

function Header({onSectionChange}){
    setTimeout(() => {
        document.querySelector(".header-content").classList.add("animated");
    }, 2700);

    return(
        <header>
            <div className="header-content">
                <HeaderSections onSectionChange={onSectionChange} />
            </div>
        </header>
    );
}

export default Header;