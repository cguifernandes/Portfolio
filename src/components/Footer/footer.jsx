import React from 'react';
import { SFooter, FooterText, FooterAutor } from './styleFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (  
        <SFooter>
            <FooterText>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/_.guiii/'><FontAwesomeIcon className='icon instagram' icon={faInstagram} /></a>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/guilherme-fernandes-6b1353243/'><FontAwesomeIcon className='icon linkedin' icon={faLinkedin} /></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/cguifernandes'><FontAwesomeIcon className='icon github' icon={faGithub} /></a>
                <a target="_blank" rel="noreferrer" href='mailto:gui.adfer@gmail.com.com'><FontAwesomeIcon className='icon email' icon={faEnvelope} /></a>
            </FooterText>
            <FooterAutor>
                <p>© 2022 Guilherme Fernandes</p>
            </FooterAutor>
        </SFooter>
    );
}
 
export default Footer;