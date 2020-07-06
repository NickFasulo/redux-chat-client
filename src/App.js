import React from 'react';
import { ActiveUsers } from './containers/ActiveUsers';
import { MessageList } from './containers/MessageList';
import { AddMessage } from './containers/AddMessage';
import './App.css';

const App = () => (
  <div class="container">
    <ActiveUsers />
    <section class="main">
      <MessageList />
      <AddMessage />
    </section>
  </div>
);

export default App;
