import axios from "axios";
import { url } from "../../helpers/urlConfig";
import {
  LOAD_CONTACT,
  LOADING_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./actionType";

export function loadContact(data) {
  return {
    type: LOAD_CONTACT,
    payload: data,
  };
}

export function loadingContact(data) {
  return {
    type: LOADING_CONTACT,
    payload: data,
  };
}

export function addContact(data) {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
}

export function deleteContact(data) {
  return {
    type: DELETE_CONTACT,
    payload: data,
  };
}

export function editContact(data) {
  return {
    type: EDIT_CONTACT,
    payload: data,
  };
}

export function fetchContacts() {
  return (dispatch) => {
    dispatch(loadingContact(true));
    axios
      .get(`${url}/contact`)

      .then((res) => {
        dispatch(loadingContact(false));
        dispatch(loadContact(res.data.data));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function addContacts(data) {
  return (dispatch) => {
    axios
      .post(`${url}/contact`, data)

      .then((res) => {
        alert(JSON.stringify(res.data.message))
        dispatch(fetchContacts());
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function editContacts(data,id) {
  return (dispatch) => {
    axios
      .put(`${url}/contact/${id}`, data)
      .then((res) => {
        dispatch(editContact(res.data,id))
        dispatch(fetchContacts())
      })

      .catch((err) => {
        alert(err)
      });
  };
}

export function deleteContacts(id) {
  return (dispatch) => {
    axios
      .delete(`${url}/contact/${id}`)

      .then((res) => {
        dispatch(deleteContact(id));
      })

      .catch((err) => {
        alert(err)
      });
  };
}
