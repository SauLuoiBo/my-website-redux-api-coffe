import React from "react";
import { Container } from "../../styles/GlobalComponents";
import styled from "styled-components";
import bg from "../../assets/image/book-bg.jpg";
import { Heading } from "../../styles/GlobalComponents/Heading";

const Booking = () => {
	return (
		<Wrapper id='booking'>
			<Container>
				<Heading>
					Booking<span>Reserve Sever</span>
				</Heading>
				<Form>
					<input type="text" placeholder="your name" />
					<input type="text" placeholder="your email" />
					<input type="number" placeholder="your phone" />
					<textarea placeholder="your message" rows={10} cols={30} />
					<input type="submit" value="send message" className="submit" />
				</Form>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: url(${bg}) no-repeat center;
	background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
`;

const Form = styled.form`
	display: block;
	margin: 0 auto 2rem auto;
	max-width: 60rem;
	border-radius: var(--border-radius-hover);
	padding: 3rem;
	border: var(--border);
	width: 80%;

	input,
	textarea {
		width: 100%;
		padding: 1rem 1.2rem;
		border-radius: 0.5rem;
		font-size: 1.6rem;
		background: none;
		text-transform: none;
		color: var(--color-main);
		border: var(--border);
		margin: 0.7rem 0;
		:focus {
			border: var(--border-hover);
		}

		&.submit {
            width: fit-content;
			display: inline-block;
			padding: 0.9rem 1.5rem;
			border-radius: var(--border-radius);
			color: var(--color-main);
			background: none;
			border: var(--border);
			cursor: pointer;
			margin-top: 1rem;
			font-size: 1.7rem;

            :hover{
                border-radius: var(--border-radius-hover);
                border: var(--border-hover);
            }
		}
	}

	textarea {
		height: 15rem;
		resize: none;
	}
`;

export default Booking;
