import styled from "styled-components";

export const Head = styled.nav`
    background-color: var(--black);
    height: 110px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 2;
    border-bottom: 5px solid var(--black4);

    &.ativa {
        transition: 0.3s all;
        transform: translateY(-100%);
    }
`;

export const HeadImg = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
`;

export const HeadNav = styled.div`
    position: absolute;
    right: 7%;
    display: none;
    visibility: hidden;
    cursor: pointer;
    transition: 0.4s all;

    div {
        width: 20px;
        height: 2px;
        background: var(--platinum);
        margin: 5px;
        transition: all 0.2s ease;
    }

    &.active .line-1 {
        transform: rotate(-45deg) translate(-5px, 5px);
    }
    &.active .line-2 {
        opacity: 0;
    }
    &.active .line-3 {
        transform: rotate(45deg) translate(-5px, -5px);
    }

    @media (max-width: 880px) {
        visibility: visible;
        display: inline;
    }
`;

export const Ul = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10%;

    .icon {
        font-size: 28px !important; 
        transition: 0.4s all;
        margin: 0px 10px;
    }
    
    a {
        text-decoration: none;
        color: var(--platinum);
        opacity: 0.70;
        transition: 0.4s all;
    }

    a:hover {
        opacity: 1;
    }

    li {
        font-size: 20px;
        margin: 0 15px;
        cursor: pointer;
    }
    
    .li a:after {
        display:block;
        content: '';
        border-bottom: solid 2px var(--platinum);
        margin-right: 2px;
        transform: scaleX(0);
        transition: transform 320ms ease-in-out;
    }

    .li:hover a:after {
        transform: scaleX(1);
    }

    @media (max-width: 880px) {
        position: fixed;
        top: 10vh;
        right: 0;
        width: 0px;
        height: 90vh;
        flex-direction: column;
        background-color: var(--black);
        justify-content: space-around;
        transition: all 0.4s ease-in;
        z-index: 999;
        
        li {
            width: 0;
            opacity: 0;
            margin: 0;
        }

        &.active {
            width: 210px;
        }

        .icon {
            font-size: 32px !important;
        }
    }
`;