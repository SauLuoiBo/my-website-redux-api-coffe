import React from "react";
import styled from "styled-components";
import user from "../../../assets/image/user.png";
import { Link } from "react-router-dom";
import MainButton from "../../../styles/GlobalComponents/MainButton";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../../redux/contactSlice";
import api from "../../../api/contact";
// import { useHistory } from "react-router";

const ContactCard = (props) => {
	const dispatch = useDispatch();

	// const history = useHistory()

	const { id, name, email } = props.contact;

	const [isOpen, setIsOpen] = React.useState(false);

	const [contactEdit, setContactEdit] = React.useState({
		id: id,
		name: name,
		email: email,
	});

	const Toggle = () => {
		setIsOpen(!isOpen);
		console.log(contactEdit);
		setContactEdit(props.contact);
	};

	// const edit = () => {
	// 	if (contactEdit.name === "" || contactEdit.email === "") {
	// 		alert("ALl the fields are mandatory!");
	// 		return;
	// 	}
	// 	dispatch(editContact(contactEdit));
	// 	console.log(contactEdit, "edit");
	// };

	// const del = () => {
	// 	dispatch(deleteContact(id));
	// 	console.log(contactEdit, "del");
	// };

const editAPI = async () => {
	if (contactEdit.name === "" || contactEdit.email === "") {
		alert("ALl the fields are mandatory!");
		return;
	}
	dispatch(editContact(contactEdit));
		console.log(contactEdit, "edit");
	try {
		await api.put(`/contacts/${id}`, contactEdit);
	} catch (err){
		console.log(`Error: ${err.message}`);
	}

}


	const delAPI = async () => {
		dispatch(deleteContact(id));
		console.log(contactEdit, "del");
		try {
			await api.delete(`/contacts/${id}`);
			// history.push('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<div>
			<Wrapper>
				<Detail>
					<img src={user} alt="aaa" />
					<Link
						to={{
							pathname: `/addcontact/${id}`,
							state: { contact: props.contact },
						}}
					>
						<h3>{name}</h3>
						<p>{email}</p>
					</Link>
				</Detail>
				<Action>
					<i className="far fa-edit _edit" onClick={() => Toggle()} />
					<i className="fas fa-trash-alt" onClick={() => delAPI()} />
				</Action>
			</Wrapper>
			{isOpen ? (
				<Wrapper>
					<AddWrapper>
						<label onClick={() => console.log(contactEdit, "check")}>
							name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={contactEdit.name}
							onChange={(e) =>
								setContactEdit({ ...contactEdit, name: e.target.value })
							}
						/>
						<label>email</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={contactEdit.email}
							onChange={(e) =>
								setContactEdit({ ...contactEdit, email: e.target.value })
							}
						/>
						<MainButton onClick={() => editAPI()}>Edit</MainButton>
					</AddWrapper>
				</Wrapper>
			) : (
				""
			)}
		</div>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0;
	padding: 1rem 0;
	border-bottom: 2px solid #1c6ea4;
	text-transform: none;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	gap: 1rem;

	img {
		height: 4rem;
	}
`;

const Action = styled.div`
	i {
		font-size: 3rem;
		margin: 0 1rem;
		color: red;
		cursor: pointer;

		&._edit {
			color: blue;
		}

		:hover {
			transform: translateY(-0.5rem) scale(1.1);
			transition: all 1s ease-in-out;
		}
	}
`;

const AddWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
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
`;

export default ContactCard;
