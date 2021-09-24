import { keyframes } from "styled-components";

export const move = keyframes`
    0%, 100% {
    transform: translateY(0rem);
    }
    50% {
    transform: translateY(-7rem);
    }
`;

export const image = keyframes`
    0%, 100% {
    transform: scale(.9);
    border-radius: var(--border-radius-hover);
    }

    50% {
    transform: scale(.8);
    border-radius: var(--border-radius);
    }
`;
