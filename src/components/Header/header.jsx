import React, { useEffect, useRef } from "react";
import { Head, HeadImg, HeadNav, Ul } from './styleHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo/logo';

const Header = () => {

    var ul = useRef(null);
    var menuResponsive = useRef(null);
    var li1 = useRef(null);
    var li2 = useRef(null);
    var li3 = useRef(null);
    var li4 = useRef(null);
    var li5 = useRef(null);

    var btnMenu;
    var list;

    useEffect(() => {
        btnMenu = menuResponsive.current;
        btnMenu.addEventListener('click', EventListener)
        return () => {btnMenu.removeEventListener('click', EventListener)};
    });

    const EventListener = () => {
        var lis = [li1.current, li2.current, li3.current, li4.current, li5.current];
        list = ul.current;

        if (list.classList.contains('active')) {
            list.classList.remove('active');
            btnMenu.classList.remove('active');
        }
        else {
            list.classList.add('active');
            btnMenu.classList.add('active');
        }
        AnimateLinks(lis);
    };

    const AnimateLinks = (links) => {
        links.forEach((link, index) => {
            if (!list.classList.contains('active')) {
                link.style.animation = `navLinkFadeOut 0.5s ease`;
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    return (  
        <header>
            <Head>
                <HeadImg>
                    <Logo />
                </HeadImg>
                <Ul ref={ul}>
                    <li ref={li1} className="li"><a href="#about">Sobre</a></li>
                    <li ref={li2} className="li"><a href="#skills">Skills</a></li>
                    <li ref={li3} className="li"><a href="#project">Projetos</a></li>
                    <li ref={li4} className="li"><a href="#contato">Contato</a></li>
                    <li ref={li5}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/cguifernandes"><FontAwesomeIcon className='icon github' icon={faGithub} /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"><FontAwesomeIcon className='icon linkedin' icon={faLinkedin} /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_.guiii/"><FontAwesomeIcon className='icon instagram' icon={faInstagram} /></a>
                    </li>
                </Ul>
                <HeadNav ref={menuResponsive}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </HeadNav>
            </Head>
        </header>
    );
}
export default Header;