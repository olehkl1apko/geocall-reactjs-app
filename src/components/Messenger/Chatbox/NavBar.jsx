import { useDispatch } from "react-redux";

import closeIcon from "@/resources/images/close-icon.svg";
import { removeChatbox } from "@/store/slices/messengerSlice";

export const NavBar = ({ username, socketId }) => {
  const dispatch = useDispatch();

  return (
    <div className="chatbox_nav_bar_container">
      <p className="chatbox_nav_bar_label">{username}</p>
      <button className="chatbox_close_icon_container">
        <img
          src={closeIcon}
          alt="close"
          className="chatbox_close_icon_img"
          onClick={() => dispatch(removeChatbox(socketId))}
        />
      </button>
    </div>
  );
};
