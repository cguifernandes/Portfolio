import React from 'react';
import { SContato, ContatoText, ContatoGif, Form } from './styleContato';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faUser, faPhone, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import messageAnimation from '../../assets/LottieJson/message.json'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IMaskInput } from "react-imask";

const Contato = () => {
    return (  

        <SContato 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" 
            data-aos-duration="1200"
            id='contato'
        >
            <div className='title'>
                <h1>Contato</h1>
                <p>Entre em contato comigo por essa sessão.</p>
            </div>
            <div className='flex'>
                <ContatoText>
                    <div className="text">
                        <div className='card email'>
                            <h3><FontAwesomeIcon className='icon' icon={faEnvelope} />E-mail</h3>
                            <p><a href='malito:gui.adfer@gmail.com'>gui.adfer@gmail.com</a></p>
                        </div>
                        <div className='card tel'>
                            <h3><FontAwesomeIcon className='icon' icon={faLocationDot} />Localização</h3>
                            <p>Jundiaí - SP</p>
                        </div>
                        <div className='card whatsapp'>
                            <h3><FontAwesomeIcon className='icon' icon={faWhatsapp} />WhatsApp</h3>
                            <p><a href='https://api.whatsapp.com/send?phone=5511932368610&text=Eae%20Gui,%20beleza?%20Vi%20seu%20portifolio...'>+55 11 93236-8610</a></p>
                        </div>
                    </div>
                    <Form action='https://formsubmit.co/gui.adfer@gmail.com' method='POST'>
                        <input type="hidden" name="_next" value="https://enzosylvestrin.github.io/portifolio/" />
                        <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
                        <div className='input email'>
                            <input placeholder='' autocomplete="on" type="email" name="email" required></input>
                            <label>E-mail<FontAwesomeIcon className='icon' icon={faEnvelope} /></label>
                        </div>
                        <div className='input nome'>
                            <input placeholder='' autocomplete="name" type="nome" name="nome" required></input>
                            <label>Nome<FontAwesomeIcon className='icon' icon={faUser} /></label>
                        </div>
                        <div className='input telefone'>
                            <IMaskInput mask="+55 (00) 00000-0000" placeholder='' type="tel" name="telefone" required />
                            <label>Telefone<FontAwesomeIcon className='icon' icon={faPhone} /></label>
                        </div>
                        <div className='input message'>
                            <textarea placeholder='' name="message" type="message" required=""></textarea>
                            <label>Mensagem<FontAwesomeIcon className='icon' icon={faMessage} /></label>
                        </div>
                        <button type="submit">Enviar<FontAwesomeIcon className='icon' icon={faShare} /></button>
                    </Form>
                </ContatoText>
                <ContatoGif>
                    <Player 
                    src={messageAnimation}
                    loop
                    autoplay
                    className="player"/>
                </ContatoGif>
            </div>
        </SContato>

    );
}
 
export default Contato;