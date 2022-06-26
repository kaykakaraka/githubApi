const GithubApi = require('./githubApi')

class Github {
  constructor(api) {
    this.api = api;
  }

  fetch(path) {
    this.api.fetchRepositoryData(path, (repositoryData) => {
      this.repositoryData = repositoryData;
      });
   
  }

  getRepoData() {
    return this.repositoryData; 
  }
}

module.exports = Github;

// const api = new GithubApi();

// // We inject the instance of `GithubApi`:
// const gihub = new Github(api);

// // This method will delegate to `GithubApi.fetchRepositoryData()`
// github.fetch('sinatra/sinatra');

// // And after a few moments, this should return a JS object with the repo information.
// github.getRepoData();