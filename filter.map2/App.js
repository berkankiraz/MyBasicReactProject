import { useState } from "react";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSearchChange = event => {
    setNewSearch(event.target.value);
    console.log(newSearch)
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 101),
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };


  // const handleSearch = (e) => {
  //   const filterObject = {
  //     name: newSearch
  //   };
  //   // const filteredValues = persons.filter(
  //   //   (item) =>
  //   //     item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  //   // );
  //   //console.log("filtered", filteredValues);
  //   console.log(filterObject,"filteroject")
  //   setNewSearch(newSearch.concat(filterObject));
  // };
  


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <h2>Filter:</h2>
        <div>
          name or number :<input class ="nameinput" value={newSearch}  onChange={handleSearchChange} />
        </div>
        <h2>Add New:</h2>
        <div>
          name: <input class ="nameinput" value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input class ="nameinput" value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Name and Numbers</h2>

      {persons.filter(person=>person.name.toLowerCase().includes(newSearch.toLowerCase())).map((person, index) => (
        <li key={index}>

          {person.name} 
        </li>
      ))}
    </div>
  );
};

export default App;
