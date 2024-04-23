import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMyLocation } from "@/store/slices/mapSlice";
import { locationOptions } from "@/constants";

export const useGeoLocation = () => {
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);
  const dispatch = useDispatch();

  const onError = (error) => {
    console.log("Error occurred when trying to get location");
    console.log(error);
    setLocationErrorOccurred(true);
  };

  const onSuccess = (position) => {
    const newLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    dispatch(setMyLocation(newLocation));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions
    );
  }, []);

  return { locationErrorOccurred };
};
