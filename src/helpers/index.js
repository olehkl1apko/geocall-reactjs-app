export const isUsernameValid = (username) =>
  username.length > 0 && username.length < 10 && !username.includes(" ");
