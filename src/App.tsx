import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: "Bruce",
    last: "Lyne"
  }

  const personNameList = [
    {
      first: "Bruce",
      last: "Wyne"
    },
    {
      first: "Vivek",
      last: "Chauhan"
    },
    {
      first: "Akash",
      last: "Sharma"
    }
  ]
  return (
    <div className="App">
      <Greet name="Akash Sharma" messageCount={100} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} />
    </div>
  );
}

export default App;
