import React from "react";
import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Spinner thickness="4px"
             speed="0.65s"
             color="blue.500"
             size="xl"/>
  )
}

export default LoadingSpinner;
