import './css/form.css'
import Input from "./Input";
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';

function Form(){
    return(
        <div className="contact-form-container">
            <div className="contact-left-side">
                <p className="contact-left-text">If you'd like to get in contact with me, you can opt for sending a direct e-mail to the next address:</p>
                <p className="contact-left-email">galassosantiago05@gmail.com</p>
            </div>
            <div className="contact-form">
                <h2 className="form-title">Or you can fill this form.</h2>    
                <div className="contact-form-body">
                    <Input type={"text"} label={"Your name"} name={"name"} placeholder={"Name"} />
                    <Input type={"email"} label={"Your e-mail"} name={"email"} placeholder={"E-mail"} />
                    <Textarea label={"Your message"} name={"message"} max_length={1000} placeholder={"Message"} />
                </div>
                <div className="contact form-submit">
                    <SubmitButton text={"Send"} />
                </div>
            </div>
        </div>
    );
}

export default Form;