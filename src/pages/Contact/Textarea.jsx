import './css/textarea.css';

function Textarea({label, name, max_length, placeholder}){
    return(
        <div className="textarea-container">
            <label htmlFor={"textarea_" + name}>{label}</label>
            <textarea name={name} id={"textarea_" + name} maxLength={max_length ? max_length : null} placeholder={placeholder}></textarea>
        </div>
    );
}

export default Textarea;