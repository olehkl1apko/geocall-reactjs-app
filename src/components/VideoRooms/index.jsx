import { useSelector } from "react-redux";

import { CreateRoomButton } from "./CreateRoomButton";
import { RoomJoinButton } from "./RoomJoinButton";
import { ParticipantsVideos } from "./ParticipantsVideos";
import { convertRoomsToArray } from "@/helpers";
import { selectRooms } from "@/store/selectors/videoRoomsSelectors";

export const VideoRooms = () => {
  const rooms = useSelector(selectRooms);

  return (
    <>
      <div className="map_page_v_rooms_list">
        <CreateRoomButton />
        {convertRoomsToArray(rooms).map((room) => (
          <RoomJoinButton key={room.id} room={room} />
        ))}
      </div>
      <ParticipantsVideos />
    </>
  );
};
