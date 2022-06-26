// Create a function fetchRepositoryInfo (in fetchRepositoryInfo.js) which

const got = require("got")

// fetches repository data from Github's API
// calls the given callback with the received data (as a JS object):
// // In node

// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(receivedResponse);
// });

// // This should log:
// //
// // {
// //   id: 106995,
// //   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
// //   name: 'sinatra',
// //   full_name: 'sinatra/sinatra',
// //   private: false,
// //   owner: {
// //     login: 'sinatra',
// //     id: 8312,
// //     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
// //   (...)
// //   (...)
// // }

const fetchRepositoryInfo = (path, aFunction) => {
  let url = 'https://api.github.com/repos/' + path;
    got(url)
      .then((response) => {
        aFunction(JSON.parse(response.body));
      });
}

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
    console.log(receivedResponse);
    });
  