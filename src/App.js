import React from 'react';
import './App.css';
// Components
import Profile from './components/Profile';
import UserList from './components/UserList';

//Context
import UserState from './context/User/UserState';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserState>
      <Profile />
      <UserList />
    </UserState>


  );
}

export default App;
