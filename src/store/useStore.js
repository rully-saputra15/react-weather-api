import {create} from "zustand";

const useStore = create((set) => ({
    longitude: "",
    latitude: "",
    setLongitude: longitude => set({longitude}),
    setLatitude: latitude => set({latitude})
}))

export default useStore;