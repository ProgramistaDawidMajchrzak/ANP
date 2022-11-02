import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import Map from './contact_images/map.png';

import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isMessageValid, setIsMessageValid] = useState(false);
    const [rodo, setRodo] = useState(false);
    const [isRodoValid, setIsRodoValid] = useState(false);

    const [showRodoModal, setShowRodoModal] = useState(false);

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
                    <h2>{t("map")}</h2>
                    <h4>ul. Kordeckiego 39, 60-123 Poznań</h4>
                    <img src={Map} alt="image_map" />
                </div>
                <div className="right_info">
                    <h2>{t("contact")}</h2>
                    <form onSubmit={Validate}>

                        <input
                            type="text"
                            placeholder={t("name")}
                            name="name"
                            className={`${isNameValid && 'input-valid'}`}
                            onChange={handleChange} />

                        <input
                            type="text"
                            placeholder={t("phone")}
                            name="phone"
                            className={`${isPhoneValid && 'input-valid'}`}
                            onChange={handleChange} />

                        <textarea
                            placeholder={t("askQ")}
                            className={`${isMessageValid && 'input-valid'}`}
                            onChange={handleChange}
                            name="message" />

                        <div className="rodo-box">
                            <input
                                value={rodo}
                                name='rodo'
                                onChange={handleChange}
                                className={`${isRodoValid && 'checkbox-valid'}`}
                                type="checkbox" />
                            <p
                                onMouseOver={() => setShowRodoModal(true)}
                                onMouseOut={() => setShowRodoModal(false)}
                            >{t("rodo")}</p>
                        </div>

                        <input
                            className='submit_input'
                            type="submit"
                            value={t("send")}
                        />

                    </form>
                </div>
                {showRodoModal && (
                    <div className="rodo_info">
                        <p>Wypełniając obowiązek informacyjny wynikający z art. 13 ogólnego Rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016r. (Dz. Urz. UE L 119 z 04.05.2016), aby zapewnić Państwu kontrolę nad sposobem wykorzystywania Państwa danych osobowych informuję, iż:
                            <br />
                            <br />
                            1. administratorem Pani/Pana danych osobowych jest ANP Serwis Sp. z o.o. z siedzibą w ul. Kordeckiego 39, 60-123 Poznań, NIP 7792545953
                            <br />
                            2. Pani/Pana dane osobowe przetwarzane będą na podstawie art. 6 ust. 1 ogólnego Rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016r. w celu wymienionym w powyższym przepisie w takim zakresie, w jakim – spełniony jest co najmniej jeden z poniższych warunków:
                            <br />
                            a) osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów;
                            <br />
                            b) przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy;
                            <br />
                            c) przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego ciążącego na administratorze;
                            <br />
                            d) przetwarzanie jest niezbędne do ochrony żywotnych interesów osoby, której dane dotyczą, lub innej osoby fizycznej;
                            <br />
                            f) przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią, z wyjątkiem sytuacji, w których nadrzędny charakter wobec tych interesów mają interesy lub podstawowe prawa i wolności osoby, której dane dotyczą, wymagające ochrony danych osobowych, w szczególności gdy osoba, której dane dotyczą, jest dzieckiem
                            <br />
                            3. odbiorcami Pani/Pana danych osobowych będą wyłącznie podmioty uprawnione do uzyskania danych osobowych
                            <br />
                            4. Pani/Pana dane osobowe przechowywane będą przez okres wynikający z właściwych przepisów prawa w oparciu o uzasadniony interes realizowany przez Administratora (dane przetwarzane są do momentu ustania przetwarzania)
                            <br />
                            5. posiada Pani/Pan prawo do żądania od Administratora dostępu do danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania
                            <br />
                            6. ma Pani/Pan prawo wniesienia skargi do organu nadzorczego
                            <br />
                            7. podanie danych osobowych jest dobrowolne, jednakże odmowa podania danych może skutkować odmową przedstawienia oferty, zawarcia umowy lub prowadzenia dalszej korespondencji drogą elektroniczną</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contact;