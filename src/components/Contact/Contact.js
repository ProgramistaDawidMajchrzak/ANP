import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import Map from './contact_images/map.png';

function Contact() {

    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isMessageValid, setIsMessageValid] = useState(false);
    const [rodo, setRodo] = useState(false);
    const [isRodoValid, setIsRodoValid] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                return (
                    setName(e.target.value),
                    setIsNameValid(false)
                )
            case 'phone':
                return (
                    setPhone(e.target.value),
                    setIsPhoneValid(false)
                )
            case 'message':
                return (
                    setMessage(e.target.value),
                    setIsMessageValid(false)
                )
            case 'rodo':
                return (
                    setRodo(!rodo),
                    setIsRodoValid(false)
                )
            default:
                return;
        };
    };

    const sendEmail = (e) => {
        emailjs.sendForm('service_fa2r0jy', 'template_mv2ba14', e.target, 'user_L1OauPxwE4IkKaDjV2sYM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Wiadomość wysłana / Сообщение отправлено');
    };

    const Validate = (e) => {
        e.preventDefault();
        if (name === '') {
            setIsNameValid(true)
        } else if (phone === '') {
            setIsPhoneValid(true)
        } else if (message === '') {
            setIsMessageValid(true)
        } else if (rodo === false) {
            setIsRodoValid(true)
        } else {
            sendEmail(e)
        }
    }


    return (
        <>
            <div className="contact_container">
                <div className="left_info">
                    <h2>Mapa</h2>
                    <img src={Map} alt="image_map" />
                </div>
                <div className="right_info">
                    <h2>Kontakt</h2>
                    <form onSubmit={Validate}>

                        <input
                            type="text"
                            placeholder='Imię'
                            name="name"
                            className={`${isNameValid && 'input-valid'}`}
                            onChange={handleChange} />

                        <input
                            type="text"
                            placeholder='Telefon'
                            name="phone"
                            className={`${isPhoneValid && 'input-valid'}`}
                            onChange={handleChange} />

                        <textarea
                            placeholder='Zadaj pytanie'
                            className={`${isMessageValid && 'input-valid'}`}
                            onChange={handleChange}
                            name="message" />

                        <div className="rodo-box">
                            <input
                                value={rodo}
                                name='rodo'
                                onChange={handleChange}
                                className={isRodoValid && 'checkbox-valid'}
                                type="checkbox" />
                            <p>Akceptuję informacje dotyczące ochrony danych osobowych</p>
                        </div>

                        <input
                            className='submit_input'
                            type="submit"
                            value="Wyślij"
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;