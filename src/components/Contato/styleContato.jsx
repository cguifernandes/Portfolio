import styled from "styled-components";

export const SContato = styled.section`
    padding: 40px 0px;
    overflow: hidden;

    .title {
        h1 {
            color: var(--yellow);
            font-size: 28px;
            text-align: center;
        }

        p {
            color: var(--platinum);
            text-align: center;
        }
    }

    .flex {
        display: flex;
        padding: 40px 0px;
    }
`;

export const ContatoText = styled.div`
    width: 55%;

    h1 {
        color: var(--yellow);
        text-align: center;
    }

    a {
        text-decoration: none;
        color: var(--platinum);
    }

    p {
        color: var(--platinum);
    }

    .text {
        padding: 0% 5%;
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    .card {
        margin: 20px 0px;
        display: flex;
        flex-wrap: wrap;
        width: 230px;
        padding: 20px;
        justify-content: center;
        background: var(--black4);
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: 1px solid transparent;
        transition: 0.5s all;
        border-radius: 10px;

        h3 {
            color: var(--yellow);
            padding-bottom: 5px;
            display: block;
            text-align: center;
            width: 100%;
        }
    }

    .icon {
        padding-right: 5px;
    }

    .tel {
        p {
            margin: 0px 10px;
        }
    }

    .whatsapp {
        button {
            background-color: transparent;
            width: 230px;
            padding: 20px;
            border: 0px;
            color: var(--platinum);
            font-size: 14px;
        }
    }

    .card:hover {
        border: 1px solid var(--yellow);
    }

    @media (max-width: 1450px) {
        .text {
            grid-template-columns: 50% 50%;
            grid-template-rows: 2;
            gap: 0px 10px;
        }

        .card {
            margin: 10px 0px;
            width: 100%;
        }

        .whatsapp {
            margin-bottom: 25px;
        }
    }

    @media (max-width: 880px) {
        width: 100%;

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .card {
            width: 65%;
        }
    }

`;

export const ContatoGif = styled.div`
    width: 45%;
    margin: auto 0;
    overflow: hidden;

    .player {
        width: 620px;
    }

    @media (max-width: 1450px) {
        #lottie {
            width: 520px;
        }
    }

    @media (max-width: 1090px) {
        #lottie {
            width: 420px;
        }
    }

    @media (max-width: 880px) {
        visibility: hidden;
        display: none;
    }
`;

export const Form = styled.form`
    padding: 0% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 80%;

    input {
        background: var(--black4);
        border: 1px solid transparent;
        color: var(--platinum);
        box-shadow: 0 0 0 0;
        outline: 0;
        padding: 15px;
        width: 100%;
        transition: 0.090s all;
        font-size: 14px;
    }

    textarea {
        background: var(--black4);
        border: 1px solid transparent;
        color: var(--platinum);
        box-shadow: 0 0 0 0;
        outline: 0;
        padding: 10px;
        height: 100px;
        width: 100%;
        transition: 0.090s all;
        resize: none;
        font-size: 14px;
    }

    button {
        background: var(--black4);
        border: 1px solid var(--yellow);
        color: var(--platinum);
        padding: 15px;
        width: 40%;
        margin: 10px 0px;
        font-size: 16px;
        cursor: pointer;
    }

    .icon {
        padding: 0;
        padding-left: 5px;
        color: var(--yellow);
    }

    .input {
        position: relative;
        margin: 5px 0px;
        padding-top: 10px;
        width: 100%;

        label {
            position: absolute;
            left: 15px;
            transform: translateY(13px);
            color: var(--platinum);
            pointer-events: none;
            transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }

    input:focus, textarea:focus {
        border: 1px solid var(--yellow);
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:not(:placeholder-shown) ~ label {
        transform: translateY(-40%) scale(0.85);
        background-color: var(--black4);
        padding: 0px 15px;
    }


`;