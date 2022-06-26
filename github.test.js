const Github = require("./github");

describe('Github',() => {
  it('gets the repo data fetched by the Api class',() => {
    const mockedApi = { fetchRepositoryData: (repoName, callback) => {
      callback({
        name: 'sinatra/sinatra',
        description: 'some fake description',
      });
    }};
    const github = new Github(mockedApi);
    github.fetch('sinatra/sinatra')
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'some fake description',
    });
  });

  it('gets different repo data fetched by the Api class',() => {
    const mockedApi = { fetchRepositoryData: (repoName, callback) => {
      callback({
        name: 'fakesinatra/sinatra',
        description: 'a very fake description',
      });
    }};
    const github = new Github(mockedApi);
    github.fetch('sinatra/sinatra')
    expect(github.getRepoData()).toEqual({
      name: 'fakesinatra/sinatra',
      description: 'a very fake description',
    });
  });
});


// const api = new GithubApi();

// // We inject the instance of `GithubApi`:
// const github = new Github(api);

// // This method will delegate to `GithubApi.fetchRepositoryData()`
// github.fetch('sinatra/sinatra');

// // And after a few moments, this should return a JS object with the repo information.
// github.getRepoData();

// file: github.test.js

// describe('Github', () => {
//   it('gets the repo data fetched by the Api class', () => {

//     // 1. We mock the implementation of the API class
//     const mockedApi = {
//       // 2. It has a method `fetchRepositoryData`...
//       fetchRepositoryData: (repoName, callback) => {
//         // 3. ...which calls the given callback function
//         callback({
//           name: 'sinatra/sinatra',
//           description: 'Some fake description'
//         });
//       }
//     }

//     // 4.  We can now call
//     //    `mockedApi.fetchRepositoryData('repo-name', callbackFunction)`
//     //     and get the expected behaviour (our callbackFunction will be called 
//     //     with the fake repo data)

//     const github = new Github(mockedApi);

//     // 5. The mocked implementation will be called instead of the real one
//     github.fetch('sinatra/sinatra');
    
//     // 6. We should get the fake repo data by calling `github.getRepoData()`
//     expect(github.getRepoData()).toEqual({
//       name: 'sinatra/sinatra',
//       description: 'Some fake description'
//     })
//   });
// });