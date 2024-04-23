import { useSelector } from "react-redux";

import { calculateDistanceBetweenCoords } from "@/utils/location";
import { ChatButton } from "./ChatButton";
import { Label } from "./Label";

export const UserInfoCard = ({ username, userLocation, socketId }) => {
  const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className="map_page_card_container">
      <Label text={username} fontSize="16px" />
      <Label
        fontSize="14px"
        text={`${calculateDistanceBetweenCoords(myLocation, userLocation)}km`}
      />
      <div className="map_page_card_buttons_container">
        <ChatButton socketId={socketId} username={username} />
      </div>
    </div>
  );
};
