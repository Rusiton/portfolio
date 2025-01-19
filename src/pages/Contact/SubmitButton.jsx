import useFormCheck from '../../hooks/useFormCheck';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function SubmitButton({text, form_ref}){
    const button_ref = useRef(null);

    const checkFormInputs = (inputs) => {
        if(useFormCheck(inputs)) button_ref.current.removeAttribute("disabled");
        else button_ref.current.removeAttribute("disabled");
    }
    
    useEffect(() => {
        const input_name = form_ref.current.querySelector("#input_name");
        const input_email = form_ref.current.querySelector("#input_email");
        const textarea_message = form_ref.current.querySelector("#textarea_message");

        input_name.addEventListener("input", checkFormInputs([input_name, input_email, textarea_message]));

    }, [form_ref])

    const submitForm = (event) => {
        console.log("a");
        return;

        const template_params = {
            name: sender_name,
            email: sender_email,
            message: sender_message
        }

        emailjs.send("service_jeojq4q", "template_g3wremf", template_params, {publicKey: "cNNN6pVScLDdSEmFg"}).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        )
    }
}

export default SubmitButton;