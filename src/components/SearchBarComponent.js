import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import "./SearchBarComponent.css";
import AddContactComponent from '../components/AddContactComponent'
import TextField from '@material-ui/core/TextField';


export default function SearchBarComponent(props) {
  return (
    <>
    <div className="SearchBar">
        <h1>Contacts</h1>
        <TextField id="standard-search" label="Search" type="search" onKeyUp={props.filterByName} />
    </div>
    <AddContactComponent />
    </>
  );
}
