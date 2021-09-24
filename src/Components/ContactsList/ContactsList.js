import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import { Heading } from "../../styles/GlobalComponents/Heading";
import ContactCard from "./elements/ContactCard";

import MainButton from "../../styles/GlobalComponents/MainButton";

import { useSelector } from 'react-redux'





const ContactsList = (props) => {
	// redux

	const data = useSelector((state) => state.contacts.contacts)

    console.log(data)
	//redux

	// upp api





	const edit = (contact) => {
		const request = {
			id: contact.id,
			name: contact.name,
			email: contact.email,
		};
		console.log(request, "hhahahah");
		props.editContactHandler(request);
	};

	const del = (id) => {
		console.log(id, "hhahahah");
		props.removeContactHandler(id);
	};
	
	const renderContactList = data.map((contact) => {
		return (
			<ContactCard
				removeContactHandler={del}
				editContactHandler={edit}
				contact={contact}
				key={contact.id}
			/>
		);
	});



	return (
		<Wrapper >
			<Container>
				<MainButton onClick={() => props.Toggle()}>
					{props.isOpen ? "Close" : "Add Contact"}
				</MainButton>
				{/* {hihi? <AddContact/>:''} */}
				<Heading>
					CONSUMER
					<span>Contacts List</span>
				</Heading>
				<List>
					{renderContactList.length > 0
						? renderContactList
						: "No Contacts available"}
				</List>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

const List = styled.div`
	width: 60%;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;

export default ContactsList;
