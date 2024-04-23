import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

import { Marker } from "./Marker";
import { UserInfoCard } from "@/components/UserInfoCard";
// import Messenger from "../Messenger/Messenger";
// import VideoRooms from "../VideoRooms/VideoRooms";

import "./MapPage.css";
import {
  selectCardChosenOption,
  selectMyLocation,
  selectOnlineUsers,
} from "@/store/selectors/mapSelectors";

const GOOGLE_API = import.meta.env.VITE_GOOGLE_API;

const MapPage = () => {
  const myLocation = useSelector(selectMyLocation);
  const onlineUsers = useSelector(selectOnlineUsers);
  const cardChosenOption = useSelector(selectCardChosenOption);

  const defaultMapProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };

  return (
    <div className="map_page_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      >
        {onlineUsers.map((onlineUser) => {
          return <Marker onlineUser={onlineUser} key={onlineUser.socketId} />;
        })}
      </GoogleMapReact>
      {/* <Messenger /> */}
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
