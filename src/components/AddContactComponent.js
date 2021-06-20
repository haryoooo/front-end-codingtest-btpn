import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useToast, Tooltip } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import "./AddContactComponent.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../store/action/contactAction";

export default function AddContactComponent() {
  const toast = useToast();
  const toastIdRef = React.useRef();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();


  function addToContacts() {
    let condition;

    const data = {
      firstName: firstname,
      lastName: lastname,
      age: age,
      photo:
        "https://www.boazproject.org/wp-content/uploads/2018/07/1280x0720.png",
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
          description: "first name is missing",
        });
        return;
      }
      if (!lastname) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "last name is missing",
        });
        return;
      }
      if (!age) {
        condition = false;
        toastIdRef.current = toast({
          position: "top",
          status: "error",
          duration: 2000,
          description: "age is missing",
        });
        return;
      } else {
        condition = true;
        dispatch(addContacts(data));
        toastIdRef.current = toast({
          position: "top",
          status: "success",
          duration: 2000,
          description: "contact succesfully added",
        });
        onClose();
        return;
      }
    } while (condition);
  }

  return (
    <div className="AddContactComponent">
      <Tooltip hasArrow label="Add To Contacts" fontSize="md">
        <AddIcon w={6} h={6} style={{ marginTop: 8 }} onClick={onOpen} />
      </Tooltip>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new contact</ModalHeader>
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
                placeholder="First name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addToContacts}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
