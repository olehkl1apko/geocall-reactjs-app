export const isUsernameValid = (username) =>
  username.length > 0 && username.length < 10 && !username.includes(" ");

export const convertRoomsToArray = (videoRooms) => {
  const rooms = [];

  Object.entries(videoRooms).forEach(([key, value]) => {
    rooms.push({
      id: key,
      creatorUsername: value.participants[0].username,
      amountOfParticipants: value.participants.length,
    });
  });

  return rooms;
};
