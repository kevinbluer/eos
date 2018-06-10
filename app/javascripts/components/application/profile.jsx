import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import Hero from '@/components/hero'

import EosAccount from '../eosAccount'

export default class Landing extends Component {

  render () {
    return (
      <Hero>
        <div className="columns">
          <div className="column"></div>

          <div className="column is-two-thirds">
            <p className="title is-1">
              Welcome to Uprise
            </p>
            <p>
              Race to the top! Uprise is a <strong>decentralized job marketplace for helping people rise up from adversity</strong>. It leverages the EOS blockchain to circumvent the need for a traditional identity or centralized bank account and thus brings back people into the global workforce.  
            </p>
            
            <EosAccount />

          </div>

          <div className="column"></div>
        </div>
      </Hero>
    )
  }

}
