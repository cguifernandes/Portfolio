import styled from "styled-components";

export const SAbout = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
`;

export const AboutAnimation = styled.div`
    width: 50%;
    .player {
        width: 750px;
        margin: 0 !important;
    }

    @media (max-width: 1490px) {
        .player {
            width: 650px;
        }
    }

    @media (max-width: 1260px) {
        .player {
            width: 550px;
        }
    }

    @media (max-width: 1090px) {
        .player {
            width: 450px;
        }
    }

    @media (max-width: 880px) {
        visibility: hidden;
        display: none;
    }
`;
export const AboutText = styled.div`
    width: 50%;
    padding-left: 5%;

    p {
        color: var(--platinum);
        font-size: 32px;
        padding-top: 4px;
    }

    span {
        color: var(--yellow);
    }

    .typewriter {
        .Typewriter {
            display: inline;
        }
    }

    @media (max-width: 880px) {
        width: 100%;
        text-align: center;
        padding: 0px;
        p {
            padding: 0px 10px;
            font-size: 24px !important;
        }
    }

    @media (max-width: 1260px) {
        p {
            font-size: 28px;
        }
    }

    @media (max-width: 1090px) {
        p {
            font-size: 22px;
        }
    }
`;