import React from 'react'
import { Container } from '../../styles/GlobalComponents'
import styled from 'styled-components'
import bg from '../../assets/image/menu-bg.jpg'
import { Heading } from '../../styles/GlobalComponents/Heading'
import { dataIcon } from './data/dataMenu'

const Menu = () => {
    return (
        <Wrapper id='menu'>
            <Container>
                <Heading>
                    OUR MENU
                    <span>Popular Menu</span>
                </Heading>
                <GripWrapper>
                    {dataIcon.map((menu, index) =>
                    <CardWrapper key={index}>
                        <img src={menu.icon} alt='icon'/>
                        <div>
                            <h2>{menu.title}</h2>
                            <p>{menu.main}</p>
                            <span>{menu.cost}</span>
                        </div>
                    </CardWrapper>
                    )}
                </GripWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
	background: url(${bg}) no-repeat;
    background-position: center;
	background-size: cover;
	padding-top: 2rem;
    padding-bottom: 4rem;
	display: flex;
	justify-content: center;
`;

const GripWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    height: fit-content;
    justify-content: center;
    margin-top: 4rem;

    @media ${(props) => props.theme.breakpoints.xl} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(1, 0.8fr);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-row-gap: 7rem;
    }

`

const CardWrapper = styled.div`
    padding: 2rem;
    border: var(--border);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: 6rem;

    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        margin-left: 0;
    }

    img {
        margin-left: -6rem;
        height: 8rem;

        @media ${(props) => props.theme.breakpoints.sm} {
        margin-top: -6rem;
        margin-left: 0;
    }
    }

    p {
        padding: 1rem 0;
    }


`

export default Menu
