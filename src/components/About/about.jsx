import { Player } from '@lottiefiles/react-lottie-player';
import aboutAnimation from '../../assets/LottieJson/about.json'
import React from 'react';
import { AboutText, SAbout, AboutAnimation } from './styleAbout';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (  
        <SAbout 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" 
            data-aos-duration="1200"
            id='about' 
        >
            <AboutText>
                <p>Prazer, me chamo Guilherme Fernandes.</p>
                <p>Construo coisas para a Internet.</p>
                <p>Atualmente estudo&nbsp;
                    <span className='typewriter'>
                        <Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                            
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString("Web")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Back-end")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Front-end")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </span>
                </p>
            </AboutText>
            <AboutAnimation>
                <Player 
                    src={aboutAnimation}
                    loop
                    autoplay
                    className="player"
                />
            </AboutAnimation>
        </SAbout>
    );
}
 
export default Home;