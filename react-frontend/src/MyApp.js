//import React from 'react'
import React, {useState} from 'react';
import Table from './Table'


function MyApp() {
  const [characters, setCharacters] = useState([
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
]);

//things go blank when this is put in 
function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={removeOneCharacter} />
        <Table characterData={characters} removeCharacter={removeOneCharacter} />
      </div>
    )  
    }
    //     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     ); 
    //     return (
    //   <div className="container">
    //     <Table characterData={characters} />
    //   </div>
    // );   

// function removeOneCharacter (index) {
//   const updated = characters.filter((character, i) => {
//     return i !== index
//     });
//     setCharacters(updated);
//   }

// }
// const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
// ];

// function MyApp() {
//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     ); 
// }
export default MyApp;
