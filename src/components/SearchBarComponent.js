import React from "react";
import "./SearchBarComponent.css";
import { Heading } from "@chakra-ui/react"
import AddContactComponent from '../components/AddContactComponent'
import TextField from '@material-ui/core/TextField';


export default function SearchBarComponent(props) {
  return (
    <>
    <div className="SearchBar">
        <Heading as="h1" size="3xl">Contacts App</Heading>
        <TextField id="standard-search" label="Search Contact" type="search" onChange={props.filterByName} />
    </div>
    <AddContactComponent />
    </>
  );
}
