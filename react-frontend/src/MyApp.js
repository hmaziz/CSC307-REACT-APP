//import React from 'react'
//import React, {useState} from 'react';
import React, {useState, useEffect} from 'react';
import Table from './Table'
import Form from './Form';
import axios from 'axios';

function MyApp() {
  const [characters, setCharacters] = useState([]);

//things go blank when this is put in 
// function removeOneCharacter (index) {

//   const updated = characters.filter((character, i) => {
//       return i !== index
//     });
//     setCharacters(updated);
//   }
function removeOneCharacter(index) {
  const characterToDelete = characters[index];
  axios.delete(`http://localhost:8000/users/${characterToDelete.id}`)
    .then(response => {
      if (response.status === 200) {
        const updated = characters.filter((character, i) => {
          return i !== index;
        });
        setCharacters(updated);
      } else {
        console.log("User could not be deleted.");
      }
    })
    .catch(error => {
      console.log(error);
    });
}
  // function updateList(person) {
  //   setCharacters([...characters, person]);
  // }
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
      {/* <Form /> */}
    </div>
  ); 
  async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:8000/users');
       return response.data.users_list;     
    }
    catch (error){
       //We're not handling errors. Just logging into the console.
       console.log(error); 
       return false;         
    }
    
 }

 //I guess this is not being used 
  useEffect(() => 
    {fetchAll().then( result => 
      {if (result)
        setCharacters(result);
    });
  }, [] );

  async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:8000/users', person);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
  }
  function updateList(person) { 
    makePostCall(person).then( result => {
      if (result && result.status === 201) {
        const newUser = result.data;
        setCharacters([...characters, newUser]);
    } 
      else {
        // do not update the state if the response is not a 201 status code
        console.log("User could not be added to the list.");
      }
    });
  }
}
export default MyApp;
