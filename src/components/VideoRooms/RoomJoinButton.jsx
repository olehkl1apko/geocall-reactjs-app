import { useSelector } from "react-redux";

import { joinVideoRoom } from "@/store/actions/videoRoomActions";
import { selectInRoom } from "@/store/selectors/videoRoomsSelectors";

export const RoomJoinButton = ({ room }) => {
  const { creatorUsername, id: roomId, amountOfParticipants } = room;
  const inRoom = useSelector(selectInRoom);

  const handleJoinRoom = () => {
    if (inRoom) {
      return alert("Already in room");
    }

    if (amountOfParticipants > 1) {
      return alert("Forbidden. There are 2 persons in this room");
    }

    joinVideoRoom(roomId);
  };

  return (
    <button onClick={handleJoinRoom} className="map_page_v_rooms_join_button">
      {creatorUsername[0]}
    </button>
  );
};
