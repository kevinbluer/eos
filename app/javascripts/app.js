import { init } from './init'
import Web3 from 'web3'

window.addEventListener('load', async function() {
  // Stash the wrapped web3 object as a simple global
  // var (this is unfortunate, but ok for now until web3 1.0
  // is released and metamask is upgraded)


  if (typeof window.web3 !== 'undefined') {
    let web3PollInterval = 1000;

    window.web3 = new Web3(window.web3.currentProvider);
    window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

    // Check to see if the user has signed in/out of their
    // web3 wallet or switched accounts
    let accountInterval = setInterval(() => {
      if (window.web3.eth.accounts[0] !== window.web3.eth.defaultAccount) {
        location.reload(true);
      }
    }, web3PollInterval);
  }

  init(document.getElementById('application'))
});


document.addEventListener('scatterLoaded', scatterExtension => {


    // Scatter will now be available from the window scope.
    // At this stage the connection to Scatter from the application is 
    // already encrypted. 
    const scatter = window.scatter;
    
    // It is good practice to take this off the window once you have 
    // a reference to it.
    window.eosScatter = scatter;
     
    // If you want to require a specific version of Scatter
    // scatter.requireVersion(3.0);
})