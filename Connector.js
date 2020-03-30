\import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: ''
    }
  }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3


    const proxy_action = {"constant":false,"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"jug","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"daiJoin","type":"address"},{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"uint256","name":"wadD","type":"uint256"}],"name":"openLockETHAndDraw","outputs":[{"internalType":"uint256","name":"cdp","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}
    var proxy_action_args = [
      "0x1476483dD8C35F25e568113C5f70249D3976ba21",
      "0xcbB7718c9F39d05aEEDE1c472ca8Bf804b2f1EaD",
      "0x775787933e92b709f2a3C70aa87999696e74A9F8",
      "0x5AA71a3ae1C0bd6ac27A1f28e1415fFFB6F15B8c",
      web3.utils.asciiToHex("ETH-A"),
      "20000000000000000000"
      ]

    const makerOpenLockDraw = await web3.eth.abi.encodeFunctionCall(proxy_action, proxy_action_args)
    console.log(makerOpenLockDraw)
  }

  render() {
    return (
      <div>
        Maker Connector
      </div>
    );
  }
}

export default App;
