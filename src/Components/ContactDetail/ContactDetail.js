import React, { useEffect,  useState } from 'react'
import { Container } from '../../styles/GlobalComponents';
import { Heading } from '../../styles/GlobalComponents/Heading';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import user from '../../assets/image/user.jpg'

const ContactDetail = () => {

    // const [state, setstate] = useState(null)
    const [state, setstate] = useState({
                name: "0",
                email: "asd"})

    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.search); // result: '?query=abc'
        console.log(location.state.contact); // result: 'some_value'
        setstate(location.state.contact)
    }, [location])

    // const {name, email} =  props.location.state.contact

    return (
        <Wrapper>
			<Container>
				<Heading>
					CONTACT
					<span>Detail</span>
				</Heading>
				<List>
                    <img src={user} alt='' />
                    <h4>{state.name}</h4>
                    <p>{state.email}</p>
				</List>
			</Container>
		</Wrapper>
    )
}

const Wrapper = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
    
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #1C6EA4;
    border-radius: 1rem;
    overflow: hidden;
    text-transform: none;

	width: 30%;

    img{
        width: 100%;
    }
    
    p{
        margin: 1rem 0;
    }

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;

export default ContactDetail
