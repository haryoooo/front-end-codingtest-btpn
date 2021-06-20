import React from "react";
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

export default function ModalComponent() {
    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Modal>
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
                // onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                // onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="Age"
                // onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
