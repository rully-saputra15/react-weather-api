import {Box, Text} from "@chakra-ui/react";
import React from "react";

const ColorBox = ({backgroundColor, color, label, value}) => {
    return(
        <Box flexDirection="column"
             alignItems="center"
             px={7}
             py={5}
             bg={backgroundColor}
             color={color}
             border="1px"
             shadow="lg"
             borderRadius="2xl"
             borderColor="blackAlpha.300"
             justifyContent="flex-start">
            <Text fontWeight="bold">{label}</Text>
            <Text>{value}</Text>
        </Box>
    )
}

export default ColorBox;
