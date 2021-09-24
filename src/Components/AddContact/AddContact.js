import React, { useState } from "react";
import { Heading } from "../../styles/GlobalComponents/Heading";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import { addContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import api from "../../api/contact";
import { v4 as uuidv4 } from "uuid";

const AddContact = () => {
	const dispatch = useDispatch();

	const [newContact, setNewContact] = useState({
		id: uuidv4(),
		name: "",
		email: "",
	});

	// const Add = () => {
	//     // e.preventDefault();
	//     if (newContact.name === "" || newContact.email === "") {
	//         alert("ALl the fields are mandatory!");
	//         return;
	//     }
	//     dispatch(addContact(newContact))
	//     console.log(newContact)
	//     setNewContact({
	//         name: '',
	//         email: ''
	//     })
	//     };

	const AddAPI = async () => {
		if (newContact.name === "" || newContact.email === "") {
			alert("ALl the fields are mandatory!");
			return;
		}
		dispatch(addContact(newContact));
		try {
			await api.post("/contacts", newContact);

			// const allPosts = [...posts, response.data];
			// setPosts(allPosts);
			setNewContact({
				id: uuidv4(),
				name: "",
				email: "",
			});
			// history.push('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	console.log(newContact);
	return (
		<Wrapper>
			<Container>
				<Heading>ADD CONTACT</Heading>
				<AddWrapper>
					<label>name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={newContact.name}
						onChange={(e) =>
							setNewContact({ ...newContact, name: e.target.value })
						}
					/>
					<label>email</label>
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={newContact.email}
						onChange={(e) =>
							setNewContact({ ...newContact, email: e.target.value })
						}
					/>
					{/* <MainButton onClick={()=>Add()}>Add</MainButton> */}
					<MainButton onClick={() => AddAPI()}>Add API</MainButton>
				</AddWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

const AddWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;

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

			:hover {
				border-radius: var(--border-radius-hover);
				border: var(--border-hover);
			}
		}
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;

const MainButton = styled.div`
	width: fit-content;
	border: var(--border);
	border-radius: var(--border-radius);
	padding: 0.9rem 1.5rem;
	cursor: pointer;
	/* transition: all .2s linear; */

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

export default AddContact;
