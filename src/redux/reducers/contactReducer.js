import * as types from "../Action-type"
const initialState = [
  { id: 0, name: "Parvin", email: "email@email.com", phone: 30303003 },
  { id: 1, name: "Unknown", email: "test@test.com", phone: 4567891230 },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      state = [...state, action.payload];
      return state;
    case types.DELETE_CONTACT:
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case types.UPDATE_CONTACT:
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case types.RESET_CONTACT:
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
