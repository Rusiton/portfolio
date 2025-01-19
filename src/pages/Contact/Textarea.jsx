import { useRef } from 'react';
import './css/textarea.css';

function Textarea({label, name, max_length, placeholder, checkFormInputs}){
    return(
        <div className="textarea-container">
            <label htmlFor={"textarea_" + name}>{label}</label>
            <textarea 
                name={name} 
                id={"textarea_" + name} 
                maxLength={max_length ? max_length : null} 
                placeholder={placeholder} 
                required 
                onInput={checkFormInputs}
            />
        </div>
    );
}

export default Textarea;