import { useSelector } from "react-redux";

import callIcon from "@/resources/images/call-icon.svg";
import { createVideoRoom } from "@/store/actions/videoRoomActions";
import { selectInRoom } from "@/store/selectors/videoRoomsSelectors";

export const CreateRoomButton = () => {
  const inRoom = useSelector(selectInRoom);

  const handleRoomCreate = () => {
    if (inRoom) {
      return alert("You are already in the room");
    }

    createVideoRoom();
  };

  return (
    <img
      className="map_page_card_img"
      src={callIcon}
      onClick={handleRoomCreate}
    />
  );
};
