// This function detects most providers injected at window.ethereum
import detectEthereumProvider from 'ws://localhost:8545';

const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}
