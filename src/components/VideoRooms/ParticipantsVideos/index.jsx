import { useSelector } from "react-redux";

import { Video } from "./Video";
import { VideoRoomButtons } from "./VideoRoomButtons";
import {
  selectInRoom,
  selectLocalStream,
  selectRemoteStream,
} from "@/store/selectors/videoRoomsSelectors";

export const ParticipantsVideos = () => {
  const inRoom = useSelector(selectInRoom);
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);

  return (
    <div className="map_page_v_rooms_videos_container">
      {inRoom && <VideoRoomButtons inRoom={inRoom} />}
      {inRoom && localStream && <Video stream={localStream} muted />}
      {inRoom && remoteStream && <Video stream={remoteStream} muted />}
    </div>
  );
};
