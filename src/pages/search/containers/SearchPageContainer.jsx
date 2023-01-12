import React, { useCallback, useEffect, useState } from "react";
import SearchPage from "../components/SearchPage.jsx";
import { useMutation, useQuery } from "react-query";
import api from "../../../helpers/api.js";
import apiData from "../../../helpers/apiData.js";
import useStore from "../../../store/useStore.js";

const SearchPageContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const username = useStore(state => state.username);

  const {
    data,
    isLoading,
    isRefetchError,
    refetch
  } = useQuery({
    queryKey: ["getListCity", searchQuery],
    enabled: false,
    queryFn: () => api.getListCity(searchQuery)
  })

  const {
    mutate
  } = useMutation(
    (data) => apiData.postNewHistory(
      data.username, data.city, data.tempC, data.status)
  )


  const handleSetSearchQuery = useCallback((query) => {
    setSearchQuery(query)
  },[])

  useEffect(() => {
    if (searchQuery !== "") {
      setTimeout(() => {
        refetch()
      },500)
    }
  },[searchQuery])

  useEffect(() => {
    if (data) {
      mutate({
        username: username,
        city: data.location.name,
        tempC: data.current.temp_c,
        status: data.current.condition.text
      })
    }
  },[data])

  return (
    <SearchPage isLoading={isLoading}
                isError={isRefetchError}
                searchQuery={searchQuery}
                handleSetSearchQuery={handleSetSearchQuery}
                data={data}
    />
  )
}

export default SearchPageContainer;
