import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../store/action/contactAction";
import { Container } from "semantic-ui-react";
import SearchBarComponent from "../components/SearchBarComponent";
import ContactsComponent from "../components/ContactsComponent";

export default function Contacts() {
  const [Value, setValue] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const { contacts, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  function filterByName(e) {
    setFilteredName(e.target.value);
    filterContacts(e.target.value);
  }

  function filterContacts(text) {
    let contactSearch;

    contactSearch = contacts.filter((value) => {
      return value.firstName.toLowerCase().includes(text.toLowerCase());
    });
    setValue(contactSearch);
  }

  return (
    <>
      <Container>
        <SearchBarComponent filterByName={filterByName} />
        <div>
          <ContactsComponent
            contacts={filteredName ? Value : contacts}
            isLoading={isLoading}
          />
        </div>
      </Container>
    </>
  );
}
