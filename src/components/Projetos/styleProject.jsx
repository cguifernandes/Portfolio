import styled from "styled-components";

export const SProject = styled.section`
    padding: 40px 0px;
    overflow: hidden;
`;

export const ProjectText = styled.div`
    text-align: center;

    h1 {
        color: var(--yellow);
        font-size: 28px;
    }

    p {
        color: var(--platinum);
    }
`;

export const ProjectCard = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 40px 0px;

    a {
        overflow: hidden;
    }

    h1 {
        color: var(--yellow);
        font-size: 22px;
        display: none !important;
    }

    p {
        color: var(--platinum);
        padding-top: 14px;
        display: none;
    }
    
    article {
        display: flex;
        margin: 0 auto;
        border-radius: 10px;
        border: 1.5px solid transparent;
        width: 90%;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: rgb(49,49,49);
        background: linear-gradient(0deg, rgba(49,49,49,1) 25%, rgba(38,38,38,1) 75%); 
        cursor: pointer;
    }

    .project-img, .project-text{
        width: 100%
    }

    .img {
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        overflow: hidden;
        border-radius: 10px;
    }

    article:hover {
        border: 1.5px solid var(--yellow);

        .img {
            opacity: 0.3;
        }

        h1 {
            display: inline !important;
            position: absolute;
            z-index: 2;
            bottom: 120px;
            left: 6%;
        }

        p {
            display: inline;
            position: absolute;
            bottom: 50px;
            padding: 0;
            padding: 0px 6%;
        }

        @media (max-width: 1383px) {
            .h1-wiki {
                bottom: 140px;
            }
        }

        @media (max-width: 1383px) {
            .h1-titulomed {
                bottom: 140px;
            }
        }

        @media (max-width: 1048px) {
            .p-wiki {
                bottom: 30px;
            }
        }

        @media (max-width: 1048px) {
            .p-titulomed {
                bottom: 30px;
            }
        }
    }

    @media (max-width: 880px) {
        grid-template-columns: 100%;

        .p-titulomed, .p-wiki {
            bottom: 30px !important;
        }

        .h1-titulomed, .h1-wiki {
            bottom: 100px !important;
        }

        article {
            margin: 20px auto;
        }
    }

    @media (max-width: 691px) {
        .h1-wiki {
            bottom: 120px !important;
        }
    }

    @media (max-width: 520px) {
        .h1-titulomed {
            bottom: 120px !important;
        }
    }

    @media (max-width: 525px) {
        .h1-titulomed, .h1-wiki {
            bottom: 110px !important;
        }

        p {
            font-size: 14px;
        }

        h1 {
            font-size: 18px;
        }
    }

    @media (max-width: 458px) {
        .h1-wiki {
            bottom: 130px !important;
        }
    }

    @media (max-width: 420px) {
        .h1-titulomed {
            bottom: 130px !important;
        }
    }
`;