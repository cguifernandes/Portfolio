import { SSkills, SkillsText, SkillsCard } from './styleSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faSquareJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

const Skills = () => {
    function CSS() {
        document.getElementById("text").innerHTML = "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML.";
        document.getElementById("title").innerHTML = "CSS";
    }
    function HTML() {
        document.getElementById("text").innerHTML = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.";
        document.getElementById("title").innerHTML = "HTML";
    }
    function JS() {
        document.getElementById("text").innerHTML = "JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas.";
        document.getElementById("title").innerHTML = "JavaScript";
    }
    function Python() {
        document.getElementById("text").innerHTML = "Python é uma linguagem de programação de alto nível, dinâmica, interpretada, modular, multiplataforma e orientada a objetos.";
        document.getElementById("title").innerHTML = "Python";
    }
    function React() {
        document.getElementById("text").innerHTML = "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
        document.getElementById("title").innerHTML = "React";
    }
    function CSharp() {
        document.getElementById("text").innerHTML = "O C# é uma linguagem de programação multiparadigma criada pela Microsoft, sendo a principal da plataforma .NET.";
        document.getElementById("title").innerHTML = "C#";
    }
    function reset() {
        document.getElementById("text").innerHTML = "Passe o mouse por cima de um Card para mais informações.";
        document.getElementById("title").innerHTML = "Skills";
    }

    return (  
        <SSkills 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" 
            data-aos-duration="1200"
            id='skills'
        >
            <SkillsText >
                <h1 id='title'>Skills</h1>
                <p id='text'>Passe o mouse por cima de um Card para mais informações.</p>
            </SkillsText>
            <SkillsCard>
                <motion.article onMouseEnter={HTML} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='html'>
                    <p>HTML</p>
                    <FontAwesomeIcon className='icon icon-html' icon={faHtml5} />
                </motion.article>
                <motion.article onMouseEnter={CSS} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='css'>
                    <p>CSS</p>
                    <FontAwesomeIcon className='icon icon-css' icon={faCss3} />
                </motion.article>
                <motion.article onMouseEnter={JS} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='js'>
                    <p>JavaScript</p>
                    <FontAwesomeIcon className='icon icon-js' icon={faSquareJs} />
                </motion.article>
                <motion.article onMouseEnter={React} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='react'>
                    <p>React</p>
                    <FontAwesomeIcon className='icon icon-react' icon={faReact} />
                </motion.article>
                <motion.article onMouseEnter={Python} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='python'>
                    <p>Python</p>
                    <FontAwesomeIcon className='icon icon-python' icon={faPython} />
                </motion.article>
                <motion.article onMouseEnter={CSharp} onMouseLeave={reset} whileHover={{ scale: 0.96 , transition: { duration: 0.1 }}} className='csharp'>
                    <p>C Sharp</p>
                    <i class="devicon-csharp-plain"></i>
                </motion.article>
            </SkillsCard>
        </SSkills>
    );
}
 
export default Skills;