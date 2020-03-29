import React, { Component } from 'react';
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


    const cdp_manager_open = {"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"open","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}
    var cdp_manager_open_args = [
      "0x3078643041314533353938313133323264393739393145303366383633613043"
      ]
    const cdp_lock_draw = {"constant":false,"inputs":[{"internalType":"uint256","name":"cdp","type":"uint256"},{"internalType":"uint256","name":"wadD","type":"uint256"}],"name":"lockAndDraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}
    var cdp_lock_draw_args = [
      "1337",
      "100000000000"
    ]
    const makerLock = await web3.eth.abi.encodeFunctionCall(cdp_lock_draw, cdp_lock_draw_args)
    console.log(makerLock)
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
