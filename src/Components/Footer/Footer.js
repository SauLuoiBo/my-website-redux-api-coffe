import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import { oneData, twoData, threeData, fourData } from "./data/dataFooter";

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<FooterWrapper>
                    <Card>
                        <h2>Our Branches</h2>
                        {oneData.map((data, index) => 
                            <a href={data.link} key={index}>
                                <i className={data.icon} />
							    <p>{data.name}</p>
                            </a>
                        )}
                    </Card>
                    <Card>
                        <h2>Quick Links</h2>
                        {twoData.map((data, index) => 
                            <a href={data.link} key={index}>
                                <i className={data.icon} />
							    <p>{data.name}</p>
                            </a>
                        )}
                    </Card>
                    <Card>
                        <h2>Contact Info</h2>
                        {threeData.map((data, index) => 
                            <a href={data.link} key={index}>
                                <i className={data.icon} />
							    <p>{data.name}</p>
                            </a>
                        )}
                    </Card>
                    <Card>
                        <h2>More Info</h2>
                        {fourData.map((data, index) => 
                            <a href={data.link} key={index}>
                                <i className={data.icon} />
							    <p>{data.name}</p>
                            </a>
                        )}
                    </Card>
				</FooterWrapper>
				<Credit>
					Created By <span>Sau Luoi</span> Designer | All Rights Reserved
				</Credit>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

const FooterWrapper = styled.div`
	display: grid;
    width: 90%;
	grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;

    @media ${(props) => props.theme.breakpoints.lg} {
		grid-template-columns: repeat(2, 1fr);
	}

    @media ${(props) => props.theme.breakpoints.sm} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Credit = styled.div`
	text-align: center;
	font-size: 2rem;
	padding: 2rem 1rem;
	margin-top: 1rem;
	color: var(--color-main);

	span {
		border-bottom: var(--border-hover);
	}
`;

const Card = styled.div`
	a {
		display: block;
		font-size: 1.5rem;
		padding: 1rem 0;
		color: var(--main-color);

        p{
        display: inline;
        margin-left: 1rem;
        }

        :hover{
            p{
                margin-left: 3rem;
            }
        }
    }

`;

export default Footer;
