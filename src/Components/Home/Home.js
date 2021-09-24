import React from "react";
import styled from "styled-components";
import bga from "../../assets/image/home-bg.jpg";
import { Container } from "../../styles/GlobalComponents";
import coffeeCup from "../../assets/image/home-img-1.png";
import MainButton from "../../styles/GlobalComponents/MainButton";
import img1 from "../../assets/image/home-img-2.png";
import img2 from "../../assets/image/home-img-3.png";
import { move } from "../../styles/animation/keyfame";




const Home = () => {

	return (
		<Wrapper id='home'>
			<Container>
				<GripWrapper>
					<Left>
						
							<h1>FRESH COFFEE IN THE MORNING</h1>
							<MainButton>Buy One Now</MainButton>

					</Left>
					<Right>
						<img src={coffeeCup} alt="coffee cup" />
					</Right>
					<Bottom>
						<div>
							<img src={img1} alt="img1" />
							<img src={img1} alt="img2" />
							<img src={img2} alt="img3" />
						</div>
					</Bottom>
				</GripWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: url(${bga}) no-repeat center;
    background-size: cover;
	background-size: cover;
	padding-top: 22rem;
	display: flex;
	justify-content: center;
`;

const GripWrapper = styled.div`
	display: grid;
    justify-content: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-areas:
		"a b"
		"c c";

	@media ${(props) => props.theme.breakpoints.md} {
		grid-template-columns: repeat(1, 0.9fr);
		grid-template-areas:
			"a"
			"b"
            "c";
        grid-row-gap: 5rem;
	}
`;

const Left = styled.div`
	grid-area: a;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */

    @media ${(props) => props.theme.breakpoints.md} {
        align-items: center;
        justify-content: center;

        h1{
            font-size: 4rem;
        }
    }
`;

const Right = styled.div`
	grid-area: b;
	display: flex;
	justify-content: center;

	img {
		height: 35rem;
		animation: ${move} 4s linear infinite;
	}
`;

const Bottom = styled.div`
	grid-area: c;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
    margin-top: 15rem;
    
    @media ${(props) => props.theme.breakpoints.md} {
        margin-top: 3rem;
    }

	img {
		height: 10rem;
		margin: 0rem 1.5rem;

        @media ${(props) => props.theme.breakpoints.sm} {
        height: 6rem;
    }

		:hover {
			transform: translateY(-2rem) scale(1.1);
		}
	}
`;

export default Home;
