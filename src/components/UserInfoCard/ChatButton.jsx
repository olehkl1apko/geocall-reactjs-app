import { useDispatch } from "react-redux";

import { addChatbox } from "@/store/slices/messengerSlice";
import chatIcon from "@/resources/images/chat-icon.svg";

export const ChatButton = ({ socketId, username }) => {
  const dispatch = useDispatch();

  return (
    <img
      src={chatIcon}
      className="map_page_card_img"
      onClick={() => {
        dispatch(
          addChatbox({
            username,
            socketId,
          })
        );
      }}
    />
  );
};
