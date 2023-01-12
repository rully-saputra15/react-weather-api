import React from "react";
import {
  Button,
  FormControl, FormLabel, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";

const LoginModal = (
  {
    isOpen,
    register,
    handleSubmit,
    handleLogin,
    handleCloseModal
  }
) => {
  return (
    <Modal isOpen={isOpen}
           onClose={handleCloseModal}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton/>
        <form onSubmit={handleSubmit(handleLogin)}>
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input {...register("username", { required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password"
                     {...register("password", { required: true })}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit">Login</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
