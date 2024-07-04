import './App.css';
import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

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
      <Greet name="Akash Sharma" isLoggedIn={true} />
      {/* <Person name={personName} />
      <PersonList names={personNameList} /> */}
      <Status status='loading' />
      <Heading>Hello! Welcome to the world of coding.</Heading>
      <Oscar>
        <Heading>Hi! React TypeScript is awesome.</Heading>
      </Oscar>
    </div>
  );
}

export default App;
