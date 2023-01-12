import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";

const HorizontalTextIcon = (
  {
    icon,
    text
  }
) => {
  return (
    <HStack alignItems="center">
      <Icon as={icon} boxSize={8}/>
      <Text>{text}</Text>
    </HStack>
  )
}

export default HorizontalTextIcon;
