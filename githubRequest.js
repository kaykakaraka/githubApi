const got = require('got');

// const handleReceivedResponse = (response) => {
//   console.log(JSON.parse(response.body));
// }

const url = 'https://api.github.com/repos/sinatra/sinatra';

// got(url).then(handleReceivedResponse);

got(url)
  .then((response) => {
    console.log(JSON.parse(response.body));
  })


// const stringValue = '{ "name": "John" }';
// const objectValue = JSON.parse(stringValue);

// console.log(objectValue); // { name: 'John' }

// // We can access properties like a regular JS object
// console.log(objectValue.name);

// Modify the code in githubRequest.js so it converts the received response body to an object, using JSON.parse, and prints it.

// We can also rewrite the above using a shorter version,
// by defining the "handler" function as an anonymous function

// got(url)
//   .then((response) => {
//     console.log(response.body);
//   });