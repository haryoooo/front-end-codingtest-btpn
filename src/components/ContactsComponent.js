import React from "react";
import LoadingComponent from "../components/LoadingComponent";
import CardComponent from "../components/CardComponent";
import "./ContactsPage.css";

export default function ContactsComponent(props) {

  if (props.isLoading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  } else {
    return (
      <div className="ContactsPage">
        {props.contacts.map((value) => {
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
    );
  }
}
