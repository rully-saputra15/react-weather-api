import React from "react";
import { HStack, Icon, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { BsSearch, WiHumidity, WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/all.js";
import LoadingSpinner from "../../../components/LoadingSpinner.jsx";
import dawnWeather from "../../../assets/weather-dawn.png";
import HorizontalTextIcon from "../../../components/HorizontalTextIcon.jsx";

const SearchPage = (
  {
    searchQuery,
    isLoading,
    isError,
    data,
    handleSetSearchQuery
  }
) => {
  console.log(data)
  return (
    <VStack spacing="10px">
      <InputGroup>
        <Input placeholder="Your City"
               value={searchQuery}
               onChange={(ev) => handleSetSearchQuery(ev.target.value)}
        />
        <InputRightElement children={<Icon as={BsSearch} boxSize={5}/>} />
      </InputGroup>
      {
        isLoading ?
          isError ?
            <Text>City is not found!</Text>
            :
            <LoadingSpinner />
          :
          data && (
            <VStack p={5}
                 borderRadius="lg"
                 backgroundImage={dawnWeather}
                 color="white"
                 justifyContent="flex-start"
                 alignItems="flex-start"
                 shadow="lg">
              <Text fontWeight="bold">{data?.location?.name}</Text>
              <Text>{data?.current?.temp_c}°C</Text>
              <Text>{data?.current?.temp_f}°F</Text>
              <Text>Status: {data?.current?.condition?.text}</Text>
              <HStack alignItems="center" justifyContent="space-between">
                <HorizontalTextIcon icon={WiMoonrise}
                                    text={data?.forecast?.forecastday[0].astro?.moonrise}
                />
                <HorizontalTextIcon icon={WiMoonset}
                                    text={data?.forecast?.forecastday[0].astro?.moonset}
                />
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <HorizontalTextIcon icon={WiSunrise}
                                    text={data?.forecast?.forecastday[0].astro?.sunrise}
                />
                <HorizontalTextIcon icon={WiSunset}
                                    text={data?.forecast?.forecastday[0].astro?.sunset}
                />
              </HStack>
              <HorizontalTextIcon icon={WiHumidity}
                                  text={data?.current?.humidity + "%"} />
            </VStack>
          )
      }
    </VStack>
  )
}

export default SearchPage;
