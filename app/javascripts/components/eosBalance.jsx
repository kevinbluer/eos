import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Eos from 'eosjs'

export default class Ether extends Component {

  constructor (props) {
    super(props)

    this.state = {
    	balance: null
    }
  }

  async getBalance(user) {
   const eos = Eos({ keyProvider: '5KKT58ECPv53JoPdYHU7kuFnBwgrEfbv598Vx9bTe28yf9SrSHd' })
   let balance = await eos.getCurrencyBalance({
       "code": "demoac",
       "account": user,
       "symbol": "SYS"
   })
   this.setState({
   	balance: balance
   })
}

  componentDidMount() {

    this.getBalance("demoac");
  }

  render() {

    return (
    	<span>{ this.state.balance }</span>
    )
  }
}