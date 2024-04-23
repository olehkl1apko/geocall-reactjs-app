import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./LoginPage.css";
// import { getFakeLocation } from "@/constants";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { connectWithSocketIOServer } from "@/utils/socketConn";
import { selectMyLocation } from "@/store/selectors/mapSelectors";
import { proceedWithLogin } from "@/store/actions/loginPageActions";
import { connectWithPeerServer } from "@/utils/webRTCHandler";
import { isUsernameValid } from "@/helpers";

import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { Loader } from "@/components/Loader";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const { locationErrorOccurred } = useGeoLocation();
  const myLocation = useSelector(selectMyLocation);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (myLocation) {
      connectWithSocketIOServer();
      connectWithPeerServer();
    }
  }, [myLocation]);

  return (
    <div className="l_page_main_container">
      {!myLocation && !locationErrorOccurred && <Loader />}
      {myLocation && (
        <div className="l_page_box">
          <p className="logo">GeoCall</p>
          <LoginInput username={username} setUsername={setUsername} />
          {locationErrorOccurred && (
            <div className="error-message">
              Your geolocation could not be determined. Try reload the page or
              contact the administrator.
            </div>
          )}
          <LoginButton
            disabled={!isUsernameValid(username) || locationErrorOccurred}
            onClickHandler={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
