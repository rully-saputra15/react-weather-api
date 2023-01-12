import React from "react";
import { Badge, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillCloud, AiOutlineHistory, BiSearchAlt, MdAccountCircle } from "react-icons/all.js";
import { motion } from "framer-motion";
import ColorBox from "./ColorBox.jsx";
import { lightGreen, navy } from "../../../constants/colors.js";
import clearWeather from "../../../assets/weather-sun.png";
import { verticalFadeInVariant } from "../../../constants/animation.js";
import VerticalFadeInItemComponent from "../../../components/VerticalFadeInItemComponent.jsx";
import LoadingSpinner from "../../../components/LoadingSpinner.jsx";

const DashboardPage = (
  {
    isLoading,
    data,
    username,
    handleOpenLoginModal,
    handleOpenHistoryModal,
    handleNavigateSearchPage
  }
) => {
  const renderCurrentWeather = () => {
    return (
      <motion.div variants={verticalFadeInVariant}
                  initial="hidden"
                  animate="visible"
      >
        <VStack p={6}
                justifyContent="flex-start"
                alignItems="flex-start"
                borderRadius="3xl"
                mb={5}
                backgroundImage={clearWeather}
                shadow="lg">
          <VerticalFadeInItemComponent>
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
          </VerticalFadeInItemComponent>
          <VerticalFadeInItemComponent>
            <Badge variant="solid"
                   colorScheme={data?.current?.temp_c > 27 ? "red" : "blue"}
                   borderRadius="2xl" px={3}>
              <Text fontSize="3xl">
                {data?.current?.temp_c}°C
              </Text>
            </Badge>
          </VerticalFadeInItemComponent>
          <VerticalFadeInItemComponent>
            <Text fontSize="xl" fontWeight="bold">
              {data?.current?.condition?.text}
            </Text>
          </VerticalFadeInItemComponent>
          <HStack w="100%" justifyContent="space-between">
            <VerticalFadeInItemComponent>
              <ColorBox label="Pressure"
                        backgroundColor={navy}
                        color="white"
                        value={data?.current?.pressure_mb}/>
            </VerticalFadeInItemComponent>
            <VerticalFadeInItemComponent>
              <ColorBox label="Wind Speed"
                        backgroundColor={lightGreen}
                        color="black"
                        value={data?.current?.wind_kph}/>
            </VerticalFadeInItemComponent>
            <VerticalFadeInItemComponent>
              <ColorBox label="Humidity"
                        backgroundColor="white"
                        color="black"
                        value={`${data?.current?.humidity}%`}/>
            </VerticalFadeInItemComponent>
          </HStack>
        </VStack>
      </motion.div>

    );
  };
  const renderForecastWeather = () => (
    data?.forecast?.forecastday[0]?.hour?.map((hour) => (
      <VerticalFadeInItemComponent key={hour?.time}>
        <VStack p={5}
                spacing="16px"
                bgColor="white"
                borderRadius="xl"
                border
                color={navy} shadow="lg">
          <Text fontWeight="bold">{hour?.time?.split(" ")[1]}</Text>
          <Image src={"https:" + hour?.condition?.icon}/>
          <Text fontWeight="thin" color={hour?.temp_c > 27 ? "red" : "blue"}>
            {hour?.temp_c}°C
          </Text>
        </VStack>
      </VerticalFadeInItemComponent>
    ))
  );
  return (
    <VStack h="100%"
            justifyContent="center"
            alignItems="center">
      {
        !isLoading && !!data
          ?
          <>
            <Icon as={username !== "" ? AiOutlineHistory : MdAccountCircle}
                  pos="absolute"
                  top={3}
                  right={5}
                  cursor="pointer"
                  onClick={username !== "" ? handleOpenHistoryModal : handleOpenLoginModal}
                  boxSize={8} />
            <Icon as={BiSearchAlt}
                  boxSize={10}
                  alignSelf="flex-end"
                  onClick={() => handleNavigateSearchPage()}
                  cursor="pointer"/>
            <VStack>
              {renderCurrentWeather()}
              <motion.div variants={verticalFadeInVariant}
                          initial="hidden"
                          animate="visible"
              >
                <HStack w="60vw" overflowX="scroll" spacing="20px" p={2}>
                  {renderForecastWeather()}
                </HStack>
              </motion.div>
            </VStack>
          </>
          :
          <LoadingSpinner />
      }
    </VStack>
  );
};

export default DashboardPage;
