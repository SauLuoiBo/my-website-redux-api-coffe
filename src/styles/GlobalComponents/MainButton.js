import styled from "styled-components"

const MainButton = styled.div`
width: fit-content;
border: var(--border);
border-radius: var(--border-radius);
padding: 0.9rem 1.5rem;
cursor: pointer;
/* transition: all .2s linear; */

p {
    font-size: 2rem;
    font-weight: 500;
}

:hover{
    border: var(--border-hover);
    border-radius: var(--border-radius-hover);
    /* transition: all .2s linear; */
}
`

export default MainButton;