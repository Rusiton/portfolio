import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import useFormCheck from '../../hooks/useFormCheck';
import Input from "./Input";
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';

import './css/form.css'

function Form({dictionary}){
    const form_ref = useRef(null);
    const submit_button_ref = useRef(null);
    
    const checkFormInputs = () => {
        const inputs = [
            form_ref.current.querySelector("#input_name"),
            form_ref.current.querySelector("#input_email"),
            form_ref.current.querySelector("#textarea_message")
        ]

        const isFormFilled = useFormCheck(inputs);

        if(isFormFilled) submit_button_ref.current.removeAttribute("disabled");
        else submit_button_ref.current.setAttribute("disabled", "");

        return isFormFilled;
    }

    const submitForm = (e) => {
        e.preventDefault();

        if(!checkFormInputs()){
            submit_button_ref.current.setAttribute("disabled", "");
            return;
        }

        const form_data = new FormData(form_ref.current);

        const template_params = {
            name: form_data.get("name"),
            email: form_data.get("email"),
            message: form_data.get("message")
        }

        emailjs.send("service_jeojq4q", "template_g3wremf", template_params, {publicKey: "cNNN6pVScLDdSEmFg"}).then(
            (response) => {
                submit_button_ref.current.classList.add("sent");
                setTimeout(() => {
                    submit_button_ref.current.classList.remove("sent");
                }, 3000);
            },
            (error) => {
                submit_button_ref.current.removeAttribute("disabled");
            },
        )
    }
    
    return(
        <div className="contact-form-container">
            <div className="contact-left-side">
                <p className="contact-left-text">{dictionary.left_text_1}</p>
                <p className="contact-left-email">galassosantiago05@gmail.com</p>
                <p className="contact-left-text">{dictionary.left_text_2}</p>
            </div>
            <form className="contact-form" ref={form_ref} onSubmit={submitForm}>
                <h2 className="form-title">{dictionary.right_side_title}</h2>    
                <div className="contact-form-body">
                    <Input 
                        type={"text"} 
                        label={dictionary.your_name} 
                        name={"name"} 
                        placeholder={"Name"} 
                        checkFormInputs={checkFormInputs} 
                    />

                    <Input 
                        type={"email"} 
                        label={dictionary.your_email} 
                        name={"email"} 
                        placeholder={"E-mail"} 
                        checkFormInputs={checkFormInputs} 
                    
                    />

                    <Textarea 
                        label={dictionary.your_message} 
                        name={"message"} 
                        max_length={1000} 
                        placeholder={"Message"} 
                        checkFormInputs={checkFormInputs} 
                    />
                </div>
                <div className="contact-form-submit">
                    <button className="submit-button" ref={submit_button_ref} disabled><p>{dictionary.send}</p><i className="fa-solid fa-paper-plane" /></button>
                </div>
            </form>
        </div>
    );
}

export default Form;