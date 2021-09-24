import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    display: flex;
    flex-direction: row;
    padding: ${props => props.main ? '0.4rem 1.2rem' : '0.6rem 5rem'};
    background-color: red;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.main ? "auto" : '100%'};
    background-color: rgb(255, 172, 183);
    border-radius: 1rem;
    border: 3px solid rgb(229, 231, 235);
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #6886c5;
        border-color: blue;
    }
`


const Text = styled.p`
    padding-right: 2rem;
    font-size: 2.4rem;
    font-weight: 500;
`

const Icon = styled.img`
    height: auto;
    width: auto;
`

const Button = (props) => {
    return (
        <Link main={props.main}>
            <Text>{props.text}</Text>
            <Icon src={props.icon} alt={props.text}/>
        </Link>
    )
}

export default Button
