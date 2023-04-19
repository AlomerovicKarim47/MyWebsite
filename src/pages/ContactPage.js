import React from 'react';
import './ContactPage.css'
import messageValidation from '../validation/validation';
import { useState, useEffect } from 'react';
import MessageService from '../service/MessageService';

const ContactPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    useEffect(() => {
        setNameError("")
        setEmailError("")
        setMessageError("")
    }, [name, email, message])

    const setError = (error) => {
        switch (error.path) {
            case "name": 
                setNameError(error.message)
                break;
            case "email": 
                setEmailError(error.message)
                break;
            case "message": 
                setMessageError(error.message)
                break;
        }
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        const messageData = { name, email, message }
        try {
            await messageValidation.validate(messageData, {abortEarly:false})
            MessageService.sendMessage(messageData)
        } catch (ValidationErrors) {
            setError(ValidationErrors.inner[0])
        }
    }

    return (
        <div className = "container">
            <div className="contact">
                <span className = "projects-title"><span>Contact</span> <span>me</span></span>
                <form className = "contact-form"
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}>
                    <div className="contact-input">
                        <label htmlFor = "name">Name</label>
                        <input value = {name} className = "my-input" type = "text" id = "name"
                            onChange={(e) => setName(e.target.value)}/>
                        <div hidden = {nameError===""} className = "validation-message">
                            <span>{nameError}</span>
                        </div>
                    </div>
                    <div className="contact-input">
                        <label htmlFor = "email">Email</label>
                        <input value = {email} className = "my-input" type = "email" id = "email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        <div hidden = {emailError===""} className = "validation-message">
                            {emailError}
                        </div>
                    </div>
                    <div className="contact-input">
                        <label htmlFor = "message">Message</label>
                        <textarea value = {message} 
                            onChange={(e) => setMessage(e.target.value)}/>
                        <div hidden = {messageError===""} className = "validation-message">
                            <span>{messageError}</span> 
                        </div>
                    </div> 
                    <button     
                        onClick={sendMessage} 
                        className = "my-button" id = "contact-form-button">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
