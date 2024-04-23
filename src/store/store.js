import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./slices/mapSlice";
import messengerReducer from "./slices/messengerSlice";
import videoRoomsReducer from "./slices/videoRoomsSlice";

const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [
          "videoRooms/setLocalStream",
          "videoRooms/setRemoteStream",
        ],
        ignoredPaths: ["videoRooms.localStream", "videoRooms.remoteStream"],
      },
    }),
});

export default store;
