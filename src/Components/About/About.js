import React from "react";
import { Container } from "../../styles/GlobalComponents";
import { Heading } from "../../styles/GlobalComponents/Heading";
import styled from "styled-components";
import about from "../../assets/image/about-img.png";
import MainButton from "../../styles/GlobalComponents/MainButton";
import { dataIcon } from "./data/data";
import { image } from "../../styles/animation/keyfame";

const About = () => {
	return (
		<Wrapper id='about'>
			<Container>
				<Heading>
					ABOUT US
					<span> Why Chooses Us </span>
				</Heading>
				<GripWrapper>
					<Left>
						<img src={about} alt='icon' />
					</Left>
					<Right>
						<h2>What's Make Our Coffee Special!</h2>
						<p>
							Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Esse Et
							Commodi, Ad, Doloremque Obcaecati Maxime Quam Minima Dolore
							Mollitia Saepe Quos, Debitis Incidunt. Itaque Possimus Adipisci
							Ipsam Harum At Autem.
						</p>
						<MainButton>Read More</MainButton>
						<IconWrapper>
							<Icon>
								<img src={dataIcon[0].icon} alt='icon' />
								<p>{dataIcon[0].title}</p>
							</Icon>
                            <Icon>
								<img src={dataIcon[0].icon} alt='icon' />
								<p>{dataIcon[0].title}</p>
							</Icon>
                            <Icon>
								<img src={dataIcon[0].icon} alt='icon' />
								<p>{dataIcon[0].title}</p>
							</Icon>
						</IconWrapper>
					</Right>
				</GripWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

const GripWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Left = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 2rem;

	img {
		width: 80%;
		animation: ${image} 4s linear infinite;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
    gap: 2.5rem;
    

    h2{
        font-size: 3rem;
        line-height: 1.8;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    @media ${(props) => props.theme.breakpoints.sm} {
        
    }
`;

const Icon = styled.div`
    display: flex;
    flex: 1 1 15rem;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
	width: 100%;
	border: var(--border);
	border-radius: var(--border-radius);
	padding: 2rem 1.5rem;
    gap: 2rem;
	/* transition: all .2s linear; */
    img {
        height: 5rem;
        width: fit-content;
    }

	p {
		font-size: 2rem;
		font-weight: 500;
        text-align: center;
	}
`;

export default About;
