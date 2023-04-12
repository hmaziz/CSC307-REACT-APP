const express = require('express');
const app = express();
const port = 8000;
/*On the fourth line, we set up our express app to
process incoming data in JSON format. With that,
Express (as a middleware) will allow us to access JSON data seamlessly in memory.*/
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }

// app.get('/users', (req, res) => {
//     res.send(users);
// });
app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}
/*Then, we set up our first API endpoint with the app.get function. 
This sets the endpoint to accept http GET requests. 
And the app.get has two arguments. First, '/' 
is the URL pattern that will map to this endpoint. Second, 
we have the callback function that'll be called when our server receives 
an incoming GET request matching the '/' URL pattern. 
This anonymous function receives two objects, one representing the request 
(req) and the other representing the response (res). Inside the function, 
we can use those objects to process the request and send a response to the client that called the REST API. 
For now, we just use the response object to send a msg back.*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      

