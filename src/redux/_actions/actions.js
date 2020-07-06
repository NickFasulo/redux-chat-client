import * as TYPES from '../_constants/constants';

let nextMessageId = 0;
let nextUserId = 0; // maybe const

export const addMessage = (message, author) => ({
  type: TYPES.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const addUser = name => ({
  type: TYPES.ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message, author) => ({
  type: TYPES.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUsersList = users => ({
  type: TYPES.USERS_LIST,
  users,
});
