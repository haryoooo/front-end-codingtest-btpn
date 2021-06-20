import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import "./CardComponent.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { deleteContacts, editContacts, fetchContacts } from "../store/action/contactAction";
import { useDispatch } from "react-redux";

export default function CardComponent(props) {
  const toast = useToast();
  const toastIdRef = React.useRef();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  // const cancelRef = React.useRef();
  const dispatch = useDispatch();

  function editInContacts(id) {

    let condition;

    const currentData = {
      "firstName": props.firstName,
      "lastName": props.lastName,
      "age": props.age,
      "photo": props.photo
    };

    const newData = {
      "firstName": firstname,
      "lastName": lastname,
      "age": age,
      "photo": "https://www.boazproject.org/wp-content/uploads/2018/07/1280x0720.png"
    };

    do {

      if (
        firstname === currentData.firstname && lastname === currentData.lastName &&
        age === currentData.age) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "there's nothing changed",
        });
        return;
      }

      if (!firstname) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "fill column firstname first",
        });
        return;
      }

      if (!lastname) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "fill column lastname first",
        });
        return;
      }

      if (!age) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "fill column age first",
        });
        return;
      }

      else {
        condition = true
        dispatch(editContacts(newData, id));
        toastIdRef.current = toast({
          position: "top",
          status: "success",
          duration: 2000,
          description: "contact succesfully edited",
        });
        onClose();
      }
    }
    while (condition)
  }

  function deleteFromContacts(id) {
    dispatch(deleteContacts(id));
  }

  return (
    <div className="CardComponent">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={props.photo}
            />
            <Card.Header>{props.firstname} {props.lastname}</Card.Header>
            <Card.Meta>{props.age} years old</Card.Meta>
            <Card.Description>
              {props.firstname} is in your contacts
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="user" />
              Friend in your Contacts
            </a>
            <div style={{ paddingTop: 20 }}>
              <Button colorScheme="green" onClick={onOpen}>
              <Icon name="edit" />
                Edit
              </Button>
              {"  "}
              <Button colorScheme="red" onClick={() => deleteFromContacts(props.id)}>
              <Icon name="delete" />
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
        </Card.Group>
        
        {/* Edit Modal */}
        <div>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit contact</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl className="Centering" width={"max-content"}>
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="https://www.internalgroup.id/frontend/assets/img/150x150.png"
                    alt=""
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input
                    ref={initialRef}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="First name"
                    defaultValue={props.firstname}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Last name"
                    defaultValue={props.lastname}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Age</FormLabel>
                  <Input
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    defaultValue={props.age}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={() => editInContacts(props.id)}>
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      );
  }
