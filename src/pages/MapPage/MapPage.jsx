import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Marker } from "./Marker";
import { UserInfoCard } from "@/components/UserInfoCard";
import { Messenger } from "@/components/Messenger";
// import VideoRooms from "../VideoRooms/VideoRooms";

import "./MapPage.css";
import {
  selectCardChosenOption,
  selectMyLocation,
  selectOnlineUsers,
} from "@/store/selectors/mapSelectors";

const GOOGLE_API = import.meta.env.VITE_GOOGLE_API;

const MapPage = () => {
  const [defaultMapProps, setDefaultMapProps] = useState(null);
  const myLocation = useSelector(selectMyLocation);
  const onlineUsers = useSelector(selectOnlineUsers);
  const cardChosenOption = useSelector(selectCardChosenOption);
  const navigate = useNavigate();

  useEffect(() => {
    if (myLocation) {
      const defaultMapProps = {
        center: {
          lat: myLocation.lat,
          lng: myLocation.lng,
        },
        zoom: 11,
      };
      setDefaultMapProps(defaultMapProps);
    } else {
      navigate("/");
    }
  }, [myLocation]);

  return (
    <div className="map_page_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API }}
        center={defaultMapProps?.center || { lat: 50.4538739, lng: 30.3538376 }}
        defaultZoom={defaultMapProps?.zoom || 11}
      >
        {onlineUsers.map((onlineUser) => {
          return <Marker onlineUser={onlineUser} key={onlineUser.socketId} />;
        })}
      </GoogleMapReact>
      <Messenger />
      {cardChosenOption && (
        <UserInfoCard
          socketId={cardChosenOption.socketId}
          username={cardChosenOption.username}
          userLocation={cardChosenOption.coords}
        />
      )}
      {/* <VideoRooms /> */}
    </div>
  );
};

export default MapPage;
