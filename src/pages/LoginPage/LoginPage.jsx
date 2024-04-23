import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./LoginPage.css";
// import { getFakeLocation } from "@/constants";
import { setMyLocation } from "@/store/slices/mapSlice";
import { connectWithSocketIOServer } from "@/utils/socketConn";
import { selectMyLocation } from "@/store/selectors/mapSelectors";
import { proceedWithLogin } from "@/store/actions/loginPageActions";
import { connectWithPeerServer } from "@/utils/webRTCHandler";
import { isUsernameValid } from "@/helpers";

import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);

  const myLocation = useSelector(selectMyLocation);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    proceedWithLogin({
      username,
      coords: {
        lng: myLocation.lng,
        lat: myLocation.lat,
      },
    });
    navigate("/map");
  };

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 60000, // check the location every minute
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions
    );

    // onSuccess(getFakeLocation());
  }, []);

  const onError = (error) => {
    console.log("Error occurred when trying to get location");
    console.log(error);
    setLocationErrorOccurred(true);
  };

  const onSuccess = (position) => {
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  useEffect(() => {
    if (myLocation) {
      connectWithSocketIOServer();
      connectWithPeerServer();
    }
  }, [myLocation]);

  return (
    <div className="l_page_main_container">
      <div className="l_page_box">
        <p className="logo">GeoCall</p>
        <LoginInput username={username} setUsername={setUsername} />
        {locationErrorOccurred && (
          <div className="error-message">
            Your geolocation could not be determined. Try again or contact the
            administrator.
          </div>
        )}
        <LoginButton
          disabled={!isUsernameValid(username) || locationErrorOccurred}
          onClickHandler={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
