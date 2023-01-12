import React from "react";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import HorizontalTextIcon from "../../../components/HorizontalTextIcon.jsx";
import { AiOutlineCloud, MdLocationCity, TbTemperature } from "react-icons/all.js";
import { verticalFadeInVariant } from "../../../constants/animation.js";
import VerticalFadeInItemComponent from "../../../components/VerticalFadeInItemComponent.jsx";
import { motion } from "framer-motion";

const HistoryModal = (
  {
    historyList,
    isOpen,
    handleCloseModal
  }
) => {
  return (
    <Modal isOpen={isOpen}
           size="xl"
           onClose={handleCloseModal}
           scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>History</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <motion.div variants={verticalFadeInVariant}
                      initial="hidden"
                      animate="visible"
          >
            <Wrap p={5} spacing="5px">
              {
                historyList?.data?.map((history, index) => (
                  <VerticalFadeInItemComponent key={index}>
                    <WrapItem>
                      <Box p={4} w="15rem" shadow="lg" borderRadius="lg">
                        <HorizontalTextIcon icon={MdLocationCity}
                                            text={history.city}/>
                        <HorizontalTextIcon icon={TbTemperature}
                                            text={`${history.temp_c}°C`}/>
                        <HorizontalTextIcon icon={AiOutlineCloud}
                                            text={history.status}/>
                      </Box>
                    </WrapItem>
                  </VerticalFadeInItemComponent>
                ))
              }
            </Wrap>
          </motion.div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default HistoryModal;
