import React from 'react'
import { Container } from '../../styles/GlobalComponents'
import styled from 'styled-components'
import pic1 from '../../assets/image/pic-1.png'
import { Heading } from '../../styles/GlobalComponents/Heading'

const Reviews = () => {
    return (
        <Wrapper id='reviews'>
            <Container>
                <Heading>
                    REVIEWS
                    <span>What Peopel Say</span>
                </Heading>
                <ReviewWrapper>
                    <img src={ pic1 } alt='pic1' />
                    <div>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Labore Aliquid Eveniet Qui, Similique Aut Sit.
                    </p>
                    <h2>
                        Nam Cuns
                    </h2>
                    <main>Satisfied Client</main>
                    <i className="fas fa-quote-left left" /> 
                    <i className="fas fa-quote-right right" /> 
                </ReviewWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

const ReviewWrapper = styled.div`
    /* display: inline-flex;
    flex-direction: column; */
    flex: 1 1 ;
    justify-content: center;
    align-items: center;
    border: var(--border);
    border-radius: var(--border-radius);
    text-align: center;
    position: relative;
    z-index: 0;
    padding: 2rem;
    width: 100%;

    img {
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        margin-bottom: .7rem;
    }

    i{
        margin: 0 0.1rem;

    }

    p{
        margin: 2rem 0 ;
    }

    .left{
            position: absolute;
            top: 2rem;
            left: 2.5rem;
            font-size: 6rem;
            color: #ccc;
        }
    .right{
            position: absolute;
            bottom: 2rem;
            right: 2.5rem;
            font-size: 6rem;
            color: #ccc;
        }

    :hover{
        .left{
            top: -6rem;
        }

        .right{
            bottom: -6rem;
        }
    }
`

export default Reviews
