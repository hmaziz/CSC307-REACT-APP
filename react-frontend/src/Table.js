import React from 'react'
function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <tbody>
      {rows}
    </tbody>
  );
}


function Table({characterData,removeCharacter}) {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter = {removeCharacter}/>
      </table>
    );
}
export default Table;