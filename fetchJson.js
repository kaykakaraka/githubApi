// Create a function fetchJson (in fetchJson.js) which accepts one URL as argument, and one callback function.

// It should send an HTTP request using got to the URL, and calls the given function with the received response's data. 
// This data should be parsed from JSON into a plain JavaScript object.
const got = require('got');

const fetchJson = (url, callbackFunction) => {
  got(url)
    .then((response => {
      callbackFunction(JSON.parse(response.body))
    })
)}

// const fetchJson = require('./fetchJson');

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})
