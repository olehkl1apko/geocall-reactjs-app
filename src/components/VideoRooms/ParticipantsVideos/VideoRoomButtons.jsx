import { useSelector, useDispatch } from "react-redux";

import disconnectIcon from "@/resources/images/call-disconnect-icon.svg";
import micIcon from "@/resources/images/mic-icon.svg";
import micOffIcon from "@/resources/images/mic-off-icon.svg";
import cameraIcon from "@/resources/images/camera-icon.svg";
import cameraOffIcon from "@/resources/images/camera-off-icon.svg";
import { leaveVideoRoom } from "@/store/actions/videoRoomActions";
import { setIsMicOn, setIsCameraOn } from "@/store/slices/videoRoomsSlice";
import {
  selectIsCameraOn,
  selectIsMicOn,
  selectLocalStream,
} from "@/store/selectors/videoRoomsSelectors";

export const VideoRoomButtons = ({ inRoom }) => {
  const isMicOn = useSelector(selectIsMicOn);
  const isCameraOn = useSelector(selectIsCameraOn);
  const localStream = useSelector(selectLocalStream);

  const dispatch = useDispatch();

  const handleMuteUnmuteChange = () => {
    localStream.getAudioTracks()[0].enabled =
      !localStream.getAudioTracks()[0].enabled;
    dispatch(setIsMicOn(!isMicOn));
  };

  const handleCameraOnOffChange = () => {
    localStream.getVideoTracks()[0].enabled =
      !localStream.getVideoTracks()[0].enabled;
    dispatch(setIsCameraOn(!isCameraOn));
  };

  return (
    <div className="m_page_v_rooms_video_buttons_container">
      <button
        onClick={handleMuteUnmuteChange}
        className="m_page_v_rooms_video_button"
      >
        <img src={isMicOn ? micIcon : micOffIcon} width="25px" height="25px" />
      </button>
      <button
        onClick={() => leaveVideoRoom(inRoom)}
        className="m_page_v_rooms_video_button"
      >
        <img src={disconnectIcon} width="25px" height="25px" />
      </button>
      <button
        onClick={handleCameraOnOffChange}
        className="m_page_v_rooms_video_button"
      >
        <img
          src={isCameraOn ? cameraIcon : cameraOffIcon}
          width="25px"
          height="25px"
        />
      </button>
    </div>
  );
};
