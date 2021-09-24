import styled from "styled-components";


export const Heading = styled.h1`
    font-size: 9rem;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: .05rem var(--color-main);
    letter-spacing: .2rem;
    text-align: center;
    pointer-events: none;
    position: relative;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        color: var(--color-main);
        font-size: 0.3em;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 5rem;
    }
`