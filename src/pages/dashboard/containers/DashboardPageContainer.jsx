import React, { useCallback, useEffect } from "react";
import DashboardPage from "../components/DashboardPage.jsx";
import useStore from "../../../store/useStore.js";
import { useMutation, useQuery } from "react-query";
import { api } from "../../../helpers/index.js";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import LoginModal from "../components/LoginModal.jsx";
import { useForm } from "react-hook-form";
import apiData from "../../../helpers/apiData.js";
import HistoryModal from "../components/HistoryModal.jsx";

const DashboardPageContainer = () => {
  const {
    isOpen,
    onOpen: handleOpenLoginModal,
    onClose: handleCloseLoginModal
  } = useDisclosure();

  const {
    isOpen: isOpenHistoryModal,
    onOpen: onOpenHistoryModal,
    onClose: handleCloseHistoryModal
  } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const [longitude, latitude, username, setLatitude, setLongitude, setUsername] =
    useStore((state) =>
      [
        state.longitude,
        state.latitude,
        state.username,
        state.setLatitude,
        state.setLongitude,
        state.setUsername,
      ]
    );

  const navigation = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ["getCurrentWeather"],
    enabled: !!longitude && !!latitude,
    queryFn: () => api.getCurrentWeather(latitude, longitude)
  });

  const {
    isLoading: isLoadingHistory,
    data: historyList,
    refetch
  } = useQuery({
    queryKey: ["getAllHistory",username],
    enabled: false,
    queryFn: () => apiData.getAllHistory(username)
  })

  const {
    mutate
  } = useMutation(
    (data) => apiData.login(data.username, data.password),
    {
      onSuccess: res => {
        setUsername(res.username)
        handleCloseLoginModal();
      }
    }
  )

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  const handleNavigateSearchPage = useCallback(() => {
    navigation("/search")
  },[navigation])

  const handleLogin = useCallback((data) => {
    mutate({
      username: data.username,
      password: data.password
    })
  },[])

  const handleOpenHistoryModal = useCallback(() => {
    refetch()
    onOpenHistoryModal()
  },[onOpenHistoryModal])

  return (
    <>
      <DashboardPage isLoading={isLoading}
                     data={data}
                     username={username}
                     handleOpenLoginModal={handleOpenLoginModal}
                     handleOpenHistoryModal={handleOpenHistoryModal}
                     handleNavigateSearchPage={handleNavigateSearchPage}/>
      <LoginModal isOpen={isOpen}
                  register={register}
                  handleSubmit={handleSubmit}
                  handleLogin={handleLogin}
                  handleCloseModal={handleCloseLoginModal} />
      <HistoryModal isOpen={isOpenHistoryModal}
                    historyList={historyList}
                    handleCloseModal={handleCloseHistoryModal} />
    </>
  );
};

export default DashboardPageContainer;
