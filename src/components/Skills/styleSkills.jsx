import styled from "styled-components";

export const SSkills = styled.section`
    display: flex;
    padding: 40px 0px;
    overflow: hidden;
    align-items: center;

    @media (max-width: 1090px) {
        height: 100vh;
    }

    @media (max-width: 880px) {
        flex-wrap: wrap;
        height: 90%;
    }
`;

export const SkillsText = styled.div`
    width: 25%;
    text-align: center;
    height: 100px;
    padding-left: 20px;
    padding-right: 10px;
    overflow: hidden;

    h1 {
        color: var(--yellow);
        font-size: 28px;
    }

    p {
        color: var(--platinum);
    }

    @media (max-width: 1090px) {
        padding-left: 30px;
        padding-right: 30px;
        width: 40%;
    }

    @media (max-width: 880px) {
        width: 100%;
        height: 20vh;

        h2 {
            font-size: 32px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (max-width: 550px) {
        h2 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }

    }
`;

export const SkillsCard = styled.div`
    width: 75%;
    display: grid;   
    grid-template-columns: 33% 33% 33%;
    gap: 40px 0px;
    padding-bottom: 20px;

    .icon {
        font-size: 160px;  
        padding-top: 5px;
        color: var(--platinum);
    }

    article {
        width: 240px;
        height: 240px;
        border-radius: 10px;
        text-align: center;
        display: block;
        margin: 0 auto;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.6s all;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: rgb(49,49,49);
    }

    .html:hover {
        .icon-html, p {
            transition: 0.8s all;
            color: #ff5722;
        }
        border: #ff5722 1px solid;
    }

    .css:hover {
        .icon-css, p {
            transition: 0.6s all;
            color: #0074be;
        }
        border: #0074be 1px solid;
    }
    
    .js:hover {
        .icon-js, p {
            transition: 0.6s all;
            color: #ffc928;
        }
        border: #ffc928 1px solid;
    }
    
    .react:hover {
        .icon-react, p {
            transition: 0.6s all;
            color: #61dbfb;
        }
        border: #61dbfb 1px solid;
    }  

    .python:hover {
        .icon-python, p {
            transition: 0.6s all;
            color: #3572a4;
        }
        border: #3572a4 1px solid;
    }

    .csharp:hover {
        .devicon-csharp-plain, p {
            transition: 0.6s all;
            color: #7b2a8f;
        }
        border: #7b2a8f 1px solid;
    }

    .csharp p {
        margin-bottom: 5px;
    }

    .devicon-csharp-plain {
        font-size: 160px;  
        color: var(--platinum);
    }

    p {
        font-size: 20px;
        margin-top: 20px;
        color: var(--platinum);
    }

    @media (max-width: 1260px) {
        article {
            width: 200px;
            height: 200px;
        }

        .icon {
            font-size: 120px; 
        }

        .devicon-csharp-plain {
            font-size: 120px;
        }
    }

    @media (max-width: 1090px) {
        grid-template-columns: 50% 50%;
        width: 60%;

        article {
            margin: 0 auto;
            width: 240px;
            height: 240px;
        }
        
        .icon {
            font-size: 160px;  
        }

        .devicon-csharp-plain {
            font-size: 160px;  
        }
    }

    @media (max-width: 880px) {
        width: 100%;
        grid-template-columns: 33% 33% 33%;
        article {
            width: 90%;
            height: 180px;
        }

        .icon {
            font-size: 90px; 
            padding-top: 10px;
        }

        .devicon-csharp-plain {
            font-size: 90px;
        }
    }

    @media (max-width: 550px) {
        grid-template-columns: 50% 50%;
    }

`;