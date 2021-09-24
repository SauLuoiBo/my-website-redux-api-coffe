import React from 'react'
import styled from 'styled-components'
import { DataMenu } from '../data/DataHeader'

const Menu = () => {
    return (
        <Wrapper className="main">
            {DataMenu.map((menu, index) =>
                <a href={menu.link} key = {index}>
                    <p>{menu.name}</p>
                </a>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    p{
        margin: 0 1rem;
        font-size: 2rem;
        font-weight: 500;
        cursor: pointer;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        width: 1fr;
        gap: 2rem;
        p{
            padding: 2rem 0;
            width: 100%;
            border-radius: 2rem;
            text-align: center;
            :hover{
                background-color: #C5E9FC;
            }
        }
    }
`

export default Menu
