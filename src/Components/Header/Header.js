import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import Menu from "./elements/Menu";
import Fade  from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const Toggle = () => {
		setIsOpen(!isOpen);
	};

	// React.useEffect(() => {
	//     setIsOpen(false)
	// })


	return (
		<Wrapper>
			<Container>
				<Navbar>
					<Btn
						className={isOpen ? "fas fa-subscript" : "fas fa-bars "}
						onClick={Toggle}
					/>
					<Logo to='/'>
						<p>Coffee</p>
						<i className="fas fa-mug-hot"></i>
					</Logo>
					<Menu />
					<Book to="/addcontact">
						<p>Book A Table</p>
					</Book>
				</Navbar>
                {isOpen ? (
                    <Fade right cascade collapse when={isOpen}>
                        <MenuMobile onClick={Toggle}>
                            <Menu />
                        </MenuMobile>
                    </Fade>
				) : (
					<></>
				)}
                
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	position: sticky;
	display: flex;
	justify-content: center;
	padding: 1.3rem 0;
	top: 0;
	right: 0;
	left: 0;
	/* background-color: var(--color-white); */
	background-color: #fff;
	z-index: 999;
`;

const Navbar = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	.main {
		@media ${(props) => props.theme.breakpoints.sm} {
			display: none;
		}
	}
`;

const Logo = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: 500;
	cursor: pointer;

	p {
		margin-right: 1rem;
	}

	i {
	}
`;

const Book = styled(Link)`
	border: var(--border);
	border-radius: var(--border-radius);
	padding: 0.9rem 1.5rem;
	cursor: pointer;
	/* transition: all .2s linear; */
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 1.1rem;

		p {
			font-size: 1.2rem;
			font-weight: 400;
		}
	}

	p {
		font-size: 2rem;
		font-weight: 500;
	}

	:hover {
		border: var(--border-hover);
		border-radius: var(--border-radius-hover);
		/* transition: all .2s linear; */
	}
`;

const Btn = styled.div`
	display: none;
	font-size: 3rem;
	color: var(--color-main);
	cursor: pointer;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
	}
`;

const MenuMobile = styled.div`

`;

export default Header;
