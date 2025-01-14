function SubmitButton({text}){
    const submitForm = (event) => {
        console.log(event)
    }
    
    return(
        <button type="button" onClick={submitForm}>{text}</button>
    );
}

export default SubmitButton;