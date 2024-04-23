import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { MessageItem } from "./MessageItem";
import { selectChatHistoryBySocketId } from "@/store/selectors/messengerSelectors";

export const Messages = ({ socketId }) => {
  const messages = useSelector((state) =>
    selectChatHistoryBySocketId(state, socketId)
  );

  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chatbox_messages_container">
      {messages?.map((message) => (
        <MessageItem
          key={message.id}
          content={message.content}
          myMessage={message.myMessage}
        />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};
