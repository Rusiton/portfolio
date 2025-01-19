import './css/input.css'

function Input({type, label, name, max_length, placeholder, checkFormInputs}){
    return(
        <div className="input-container">
            <label htmlFor={"input_" + name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={"input_" + name} 
                maxLength={max_length ? max_length : null} 
                placeholder={placeholder} 
                required
                onInput={checkFormInputs} />
        </div>
    );
}

export default Input;