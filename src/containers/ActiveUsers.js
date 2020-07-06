import { connect } from 'react-redux';
import ActiveUsersComponent from '../components/ActiveUsers';

export const ActiveUsers = connect(
  state => ({
    users: state.users,
  }),
  {}
)(ActiveUsersComponent);
