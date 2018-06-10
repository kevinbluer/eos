import React, { Component } from 'react'

import GetNetworkNameService from '@/services/get-network-name-service'

import Address from '@/components/address'
import EOSBalance from '@/components/eosBalance'

import AvatarPlaceholderImage from '@/../images/avatar-placeholder.png'

// import './header.scss';

const NetworkInfo = class extends Component {

  constructor (props) {
    super(props)

    this.state = {
      accountAddress: '',
      balance: null,
      networkName: ''
    }
  }

  componentDidMount() {
    if (
      window.web3
      && window.web3.eth.defaultAccount
      && window.web3.eth.defaultAccount.length > 0
    ) {
      this.setState({ accountAddress: window.web3.eth.defaultAccount })
      this.setState({ networkName: GetNetworkNameService() })
    }
  }

  render() {
    if (
      window.web3
      && window.web3.eth.defaultAccount
      && window.web3.eth.defaultAccount.length > 0
    ) {
      return (
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <span className="has-text-success">{'\u2b24'}</span> &nbsp; {this.state.networkName}
            </div>
            <div className="navbar-item">
              <EOSBalance />
            </div>
            <div className="navbar-item">
              <figure className="image is-32x32">
                <img className="is-circular" src={`/${AvatarPlaceholderImage}`} />
              </figure>
              &nbsp;
              <span>Username</span>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default NetworkInfo;
