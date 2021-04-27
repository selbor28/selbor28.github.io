
// This function detects most providers injected at window.ethereum
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");


const provider = new web3.provider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}
