import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../store/action/contactAction";
import CardComponent from "../components/CardComponent";
import { Container } from "semantic-ui-react";
import "./ContactsPage.css";
import SearchBarComponent from "../components/SearchBarComponent";
import LoadingComponent from "../components/LoadingComponent";

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

  if (isLoading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  } else {
    return (
      <>
        <Container>
          <SearchBarComponent filterByName={filterByName} />
          {filteredName ? (
            <div className="ContactsPage">
              {Value.map((value) => {
                return (
                  <CardComponent
                    id={value.id}
                    key={value.id}
                    firstname={value.firstName}
                    lastname={value.lastName}
                    age={value.age}
                    photo={value.photo}
                  />
                );
              })}
            </div>
          ) : (
            <div className="ContactsPage">
              {contacts.map((value) => {
                return (
                  <CardComponent
                    id={value.id}
                    key={value.id}
                    firstname={value.firstName}
                    lastname={value.lastName}
                    age={value.age}
                    photo={value.photo}
                  />
                );
              })}
            </div>
          )}
        </Container>
      </>
    );
  }
}
