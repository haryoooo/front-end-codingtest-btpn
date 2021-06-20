import {
  LOADING_CONTACT,
  LOAD_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "../action/actionType";

const initialState = {
  contacts: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CONTACT: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case LOAD_CONTACT: {
      return {
        ...state,
        contacts: action.payload,
      };
    }

    case ADD_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.concat(action.payload),
      };
    }

    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    }

    case EDIT_CONTACT: {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      const newContact = [...state.contacts];
      newContact[index] = action.payload;

      return {
        ...state,
        contacts: newContact,
      };
    }

    default:
      return {
          ...state
      }
  }
};
