export const selectRooms = (store) => store.videoRooms.rooms;
export const selectInRoom = (state) => state.videoRooms.inRoom;
export const selectLocalStream = (state) => state.videoRooms.localStream;
export const selectRemoteStream = (state) => state.videoRooms.remoteStream;
export const selectIsMicOn = (state) => state.videoRooms.isMicOn;
export const selectIsCameraOn = (state) => state.videoRooms.isCameraOn;
