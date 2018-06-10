import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Eos from 'eosjs'

export default class EosAccount extends Component {

  constructor (props) {
    super(props)

    this.state = {
    	account: null
    }
  }

  getEosAccount() {

  	// Optional configuration..
	let config = {
	  chainId: null, // 32 byte (64 char) hex string
	  keyProvider: ['5JwZSL8L6y5N5RUhTBdTjEN8XaagsToKqxEtAoyYBX7CfhUgJzA', '5JsZdPoBkjLSadXRjkSARiz3qjmEMu4KfX4TnzmbEfhdMZNarmr'], // WIF string or array of keys..
	  httpEndpoint: 'http://127.0.0.1:8888',
	  mockTransactions: () => 'pass', // or 'fail'
	  transactionHeaders: (expireInSeconds, callback) => {
	    callback(null/*error*/, headers)
	  },
	  expireInSeconds: 60,
	  broadcast: true,
	  debug: false, // API and transactions
	  sign: true
	}

  	const eos = Eos(config);

	eos.getBlock(1).then(result => {
		this.setState({
			account: result.timestamp
		})
	})
  }

  componentDidMount() {
    this._isMounted = true;

    this.getEosAccount();
  }

  render() {
    return (
      <div className=''>
      	{this.state.account}
      </div>
    )
  }
}

EosAccount.propTypes = {
}
