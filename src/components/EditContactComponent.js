// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useToast } from "@chakra-ui/react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   useDisclosure,
//   Image,
// } from "@chakra-ui/react";
// import { editContacts, fetchContacts } from "../store/action/contactAction";

// export default function EditContactComponent(props) {
//   const toast = useToast();
//   const toastIdRef = React.useRef();
//   const initialRef = React.useRef();
//   const finalRef = React.useRef();
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [age, setAge] = useState("");
//   const dispatch = useDispatch();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   function editInContacts() {
//     props.editInContacts()
//     let condition;

//     const data = {
//       firstName: firstname,
//       lastName: lastname,
//       age: age,
//       photo: "",
//     };

//     do {
//       if (!firstname && !lastname && !age) {
//         condition = false;
//         toastIdRef.current = toast({
//           position: "top",
//           status: "error",
//           duration: 2000,
//           description: "fill the column first",
//         });
//         return;
//       }

//       if (!firstname) {
//         condition = false;
//         toastIdRef.current = toast({
//           position: "top",
//           status: "error",
//           duration: 2000,
//           description: "first name is missing",
//         });
//         return;
//       }
//       if (!lastname) {
//         condition = false;
//         toastIdRef.current = toast({
//           position: "top",
//           status: "error",
//           duration: 2000,
//           description: "last name is missing",
//         });
//         return;
//       }
//       if (!age) {
//         condition = false;
//         toastIdRef.current = toast({
//           position: "top",
//           status: "error",
//           duration: 2000,
//           description: "age is missing",
//         });
//         return;
//       } else {
//         condition = true;
//         dispatch(editContacts(data));
//         toastIdRef.current = toast({
//           position: "top",
//           status: "success",
//           duration: 2000,
//           description: "contact succesfully added",
//         });
//         dispatch(fetchContacts());
//         onClose();
//         return;
//       }
//     } while (condition);
//   }

//   return (
//     <div className="EditContact">
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit contact</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl className="Centering" width={"max-content"}>
//               <Image
//                 borderRadius="full"
//                 boxSize="150px"
//                 src="https://www.internalgroup.id/frontend/assets/img/150x150.png"
//                 alt=""
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>First name</FormLabel>
//               <Input
//                 ref={initialRef}
//                 onChange={(e) => setFirstname(e.target.value)}
//                 placeholder="First name"
//                 value={props.firstName}
//               />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Last name</FormLabel>
//               <Input
//                 onChange={(e) => setLastname(e.target.value)}
//                 placeholder="Last name"
//                 value={props.lastName}
//               />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Age</FormLabel>
//               <Input
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Age"
//                 value={props.age}
//               />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={editInContacts}>
//               Submit
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }
