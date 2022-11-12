import styled from "styled-components";

export const SFooter = styled.section`
    height: 8vh;
    display: flex;
    align-items: center;
    border-top: 5px solid var(--black4);

    @media (max-width: 880px) {
        flex-wrap: wrap;
        text-align: center;
        padding: 10px 0px;
        height: 10vh;
    }
`;

export const FooterText = styled.section`
    width: 70%;
    padding: 0% 5%;

    .icon {
        color: var(--platinum);
        font-size: 28px;
        margin: 0px 10px;
        transition: 0.4s all;
        opacity: 0.70;
    }

    a:hover {
        text-decoration: none;
        
        .icon {
            opacity: 1;
        }
    }

    @media (max-width: 880px) {
        width: 100%;
    }
`;

export const FooterAutor = styled.section`
    width: 30%;

    p {
        color: var(--platinum);
    } 

    a {
        text-decoration: none;
        color: var(--platinum);
    }

    @media (max-width: 880px) {
        width: 100%;
    }
`;