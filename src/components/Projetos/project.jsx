import React from 'react';
import WikiDemonSlayer from '../../img/wikiDemonSlayer.png'
import TituloMed from '../../img/TituloMed.png'
import { SProject, ProjectText, ProjectCard } from './styleProject';

const Project = () => {
    return (  
        <SProject 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" 
            data-aos-duration="1200"
            id='project'
        >
            <ProjectText>
                <h1>Projetos</h1>
                <p>A seguir, alguns projetos feitos por mim.</p>
            </ProjectText>
            <ProjectCard>
                <article className='wiki'>
                    <h1 className='h1-wiki'>Demon Slayer Wiki</h1>
                    <a target="_blank" rel="noreferrer" href='https://cguifernandes.github.io/Wiki-Demon-Slayer/'><img className='img wiki' src={WikiDemonSlayer} alt='imagem do projeto da wiki demon slayer'></img></a>
                    <p className='p-wiki'>Este projeto foi desenvolvido com o objetivo de praticar a criação de API'S juntamente com o consumo da API em um site. Onde a API foi desenvolvida por mim, e com estudos e ensinamentos desenvolvi o site.</p>
                </article>
                <article className='titulomed'>
                    <h1 className='h1-titulomed'>TituloMED</h1>
                    <a target="_blank" rel="noreferrer" href='https://cguifernandes.github.io/TituloMED/'><img className='img wiki' src={TituloMed} alt='imagem do projeto da wiki demon slayer'></img></a>
                    <p className='p-titulomed'>Este aplicativo surgiu da necessidade de oferecer maior dinamismo e interatividade para as aulas de Química, no formato on-line durante o período de pandemia. Neste contexto surgiu TITULOMED.</p>
                </article>
            </ProjectCard>
        </SProject>
    );
}
 
export default Project;