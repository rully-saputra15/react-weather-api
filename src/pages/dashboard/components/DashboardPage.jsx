import React from "react";
import {Badge, Button, Center, Container, HStack, Icon, Image, Spinner, Text, VStack} from "@chakra-ui/react";
import {AiFillCloud, BiSearchAlt} from "react-icons/all.js";
import ColorBox from "./ColorBox.jsx";
import {lightGreen, navy} from "../../../constants/colors.js";
import clearWeather from "../../../assets/weather-sun.png";
import dawnWeather from "../../../assets/weather-dawn.png";

const DashboardPage = ({isLoading, data}) => {
    const renderCurrentWeather = () => {
        return (
            <VStack p={6}
                    border="1px"
                    borderColor="blue.100"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    borderRadius="3xl"
                    mb={5}
                    backgroundImage={clearWeather}
                    shadow="lg">
                <HStack alignItems="center" spacing="16px;">
                    <Icon as={AiFillCloud}
                          border="1px"
                          p={1}
                          borderRadius="full"
                          boxSize={10}
                          color="orange.300"/>
                    <VStack spacing="1px" alignItems="flex-start">
                        <Text fontSize="2xl" fontWeight="bold">{data?.location?.name}</Text>
                        <Text fontSize="xl">{data?.location?.region}</Text>
                    </VStack>
                </HStack>
                <Badge variant="solid" colorScheme="blue" borderRadius="2xl" px={3}>
                    <Text fontSize="3xl">
                        {data?.current?.temp_c}°C
                    </Text>
                </Badge>
                <Text fontSize="xl" fontWeight="bold">
                    {data?.current?.condition?.text}
                </Text>
                <HStack w="100%" justifyContent="space-between">
                    <ColorBox label="Pressure"
                              backgroundColor={navy}
                              color="white"
                              value={data?.current?.pressure_mb} />
                    <ColorBox label="Wind Speed"
                              backgroundColor={lightGreen}
                              color="black"
                              value={data?.current?.wind_kph} />
                    <ColorBox label="Humidity"
                              backgroundColor="white"
                              color="black"
                              value={data?.current?.humidity} />
                </HStack>
            </VStack>
        )
    }
    const renderForecastWeather = () => (
        data?.forecast?.forecastday[0]?.hour?.map((hour) => (
            <VStack p={5}
                    key={hour?.time}
                    spacing="16px"
                    bgColor="white"
                    borderRadius="xl"
                    border
                    color={navy} shadow="lg">
                <Text fontWeight="bold">{hour?.time?.split(" ")[1]}</Text>
                <Image src={"https:" + hour?.condition?.icon} />
                <Text fontWeight="thin">{hour?.temp_c}°C</Text>
            </VStack>
        ))
    )
    return (
        <VStack h="100%" justifyContent="center" alignItems="center">
            <Icon as={BiSearchAlt} boxSize={10} alignSelf="flex-end" cursor="pointer"/>
            {
                isLoading
                    ?
                    <Spinner thickness="4px"
                             speed="0.65s"
                             color="blue.500"
                             size="xl"/>
                    :
                    <VStack>
                        {renderCurrentWeather()}
                        <HStack w="60vw" overflowX="scroll" spacing="20px" p={2}>
                            {renderForecastWeather()}
                        </HStack>
                    </VStack>

            }
        </VStack>
    )
}

export default DashboardPage;