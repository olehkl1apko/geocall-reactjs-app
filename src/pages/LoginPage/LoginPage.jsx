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

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const myLocation = useSelector(selectMyLocation);
  const { locationErrorOccurred } = useGeoLocation();

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
