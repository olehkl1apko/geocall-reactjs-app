import { useDispatch } from "react-redux";

import locationIcon from "@/resources/images/location-icon.svg";
import { setCardChosenOption } from "@/store/slices/mapSlice";

export const Marker = ({ onlineUser }) => {
  const { myself, socketId, username, coords } = onlineUser;
  const dispatch = useDispatch();

  const handleOptionChoose = () => {
    if (!myself) {
      dispatch(
        setCardChosenOption({
          socketId: socketId,
          username: username,
          coords: coords,
        })
      );
    }
  };

  return (
    <div className="map_page_marker_container" onClick={handleOptionChoose}>
      <img src={locationIcon} alt={username} className="map_page_marker_img" />
      <p className="map_page_marker_text">{myself ? "Me" : username}</p>
    </div>
  );
};
