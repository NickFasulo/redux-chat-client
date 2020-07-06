import * as TYPES from '../_constants/constants';

const users = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    case TYPES.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
