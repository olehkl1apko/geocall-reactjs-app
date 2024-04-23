import { useSelector } from "react-redux";

import "./Messenger.css";
import { Chatbox } from "./Chatbox";
import { selectChatboxes } from "@/store/selectors/messengerSelectors";

export const Messenger = () => {
  const chatboxes = useSelector(selectChatboxes);

  return (
    <div className="messenger_container">
      {chatboxes &&
        chatboxes.length > 0 &&
        chatboxes.map((chatbox) => (
          <Chatbox
            key={chatbox.socketId}
            socketId={chatbox.socketId}
            username={chatbox.username}
          />
        ))}
    </div>
  );
};
