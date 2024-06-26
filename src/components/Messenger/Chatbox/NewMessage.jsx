import { useState } from "react";
import { useSelector } from "react-redux";

import { sendChatMessage } from "@/store/actions/messengerActions";
import { selectOnlineUsers } from "@/store/selectors/mapSelectors";

export const NewMessage = ({ socketId }) => {
  const [message, setMessage] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const onlineUsers = useSelector(selectOnlineUsers);

  const handleKeyPressed = (event) => {
    if (event.code === "Enter" && message.length > 0) {
      proceedChatMessage();
      setMessage("");
    }
  };

  const proceedChatMessage = () => {
    if (onlineUsers.find((user) => user.socketId === socketId)) {
      sendChatMessage(socketId, message);
    } else {
      setInputDisabled(true);
    }
  };

  return (
    <div className="chatbox_new_message_container">
      <input
        className="chatbox_new_message_input"
        type="text"
        placeholder="Type your message ..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyPressed}
        disabled={inputDisabled}
      />
    </div>
  );
};
