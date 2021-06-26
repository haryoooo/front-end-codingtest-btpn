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
import { useToast} from "@chakra-ui/react";
import React, { useState } from "react";
import "./CardComponent.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { deleteContacts, editContacts } from "../store/action/contactAction";
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
  const dispatch = useDispatch();


  function handleChange(){
    onOpen()

    setFirstname(props.firstname)
    setLastname(props.lastname)
    setAge(props.age)
  }

  function editInContacts(id) {
    let condition;

    const data = {
      "firstName": firstname,
      "lastName": lastname,
      "age": age,
      "photo": "https://www.boazproject.org/wp-content/uploads/2018/07/1280x0720.png"
    };

    do {

      if (!firstname && !lastname && !age) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "fill the column first",
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
        dispatch(editContacts(data, id));
        toastIdRef.current = toast({
          position: "top",
          status: "success",
          duration: 2000,
          description: "contact succesfully edited",
        });
        onClose();
        return
      }
    }while (condition)
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
              size="10"
              floated='right'
              size='small'
              src={props.photo}
            />
            <Card.Header>{props.firstname} {props.lastname}</Card.Header>
            <Card.Meta>{props.age} years old</Card.Meta>
            <Card.Description>
            <Icon name="user" />
              {props.firstname} is in your contacts
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <div>
              <Button colorScheme="green" onClick={handleChange}>
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
                    value={firstname}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Age</FormLabel>
                  <Input
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
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
