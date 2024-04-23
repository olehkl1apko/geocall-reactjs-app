import { createSelector } from "@reduxjs/toolkit";

const selectMessenger = (state) => state.messenger;
export const selectChatboxes = (state) => state.messenger.chatboxes;

export const selectChatHistoryBySocketId = createSelector(
  [selectMessenger, (state, socketId) => socketId],
  (messenger, socketId) => messenger.chatHistory[socketId] || []
);
