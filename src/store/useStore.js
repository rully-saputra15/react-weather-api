import {create} from "zustand";
import {persist} from "zustand/middleware";
const useStore = create(
  persist(
    (set, _get) => ({
        longitude: "",
        latitude: "",
        username: "",
        setLongitude: longitude => set({longitude}),
        setUsername: username => set({username}),
        setLatitude: latitude => set({latitude})
    }),
    {
        name: "react-weather",
        getStorage: () => localStorage
    }
  )
)

export default useStore;
