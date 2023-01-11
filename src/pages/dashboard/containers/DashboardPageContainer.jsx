import React, {useEffect, useState} from "react";
import DashboardPage from "../components/DashboardPage.jsx";
import useStore from "../../../store/useStore.js";
import {useQuery} from "react-query";
import {api} from "../../../helpers/index.js";

const DashboardPageContainer = () => {
    const [longitude, latitude, setLatitude, setLongitude] =
        useStore((state) => [state.longitude, state.latitude, state.setLatitude, state.setLongitude]);

    const { isLoading, data} = useQuery({
        queryKey: ["getCurrentWeather"],
        enabled: !!longitude && !!latitude,
        queryFn: () => api.getCurrentWeather(latitude, longitude),
        onSuccess: res => {
            console.log(res);
        }
    })
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
    }, [])

    // useEffect(() => {
    //     console.log(longitude)
    //     console.log(latitude)
    //     refetch()
    //
    // },[longitude, latitude])


    return (
        <DashboardPage isLoading={isLoading} data={data}/>
    )
}

export default DashboardPageContainer;