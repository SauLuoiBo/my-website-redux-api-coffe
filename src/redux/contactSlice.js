import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
	name: "contacts",
	initialState: {
		contacts: [],
	},
	reducers: {
		setContacts: (state, { payload }) => {
			state.contacts = payload;
		},
		addContact: (state, { payload }) => {
			state.contacts.push(payload);
		},
		deleteContact: (state, { payload }) => {
			state.contacts = state.contacts.filter((c) => c.id !== payload);
		},
		editContact: (state, { payload }) => {
			const index = state.contacts.findIndex((contact) => contact.id === payload.id);
			if (index !== -1) {
				state.contacts[index].name = payload.name;
                state.contacts[index].email = payload.email;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { setContacts, deleteContact, addContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
