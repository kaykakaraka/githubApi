// Implement a class GithubApi (in githubApi.js) with a method fetchRepositoryData which:
// fetches repository data from Github's API.
// calls the given callback with the received data (after transforming the JSON into a JavaScript object).
// // In node

const got = require("got")

// const GithubApi = require('./githubApi');

// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
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

class GithubApi {
  constructor() {
    this.api = 'https://api.github.com/repos/'
  }

fetchRepositoryData(repoPath, printFunction) {
  let url = this.api + repoPath;
  console.log(url)
  got(url)
    .then((response) => {
      printFunction(JSON.parse(response.body))
    });
}

}

// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
//  });

 module.exports = GithubApi