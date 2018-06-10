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
            <hr />
            <h3>Why Uprise?</h3>
            <br />
            <div className="columns">
              <a className="bd-focus-item column has-text-centered" href="#">
                <p className="title is-4">
                  <strong>Work from any screen</strong>
                </p>
                <p className="subtitle is-6">Choose from a diverse range of work that can be done from any screen</p>
                <figure className="bd-focus-icon">
                  <span className="bd-focus-mobile icon is-primary is-large">
                    <i className="fas fa-lg fa-mobile-alt"></i>
                  </span>
                  <span className="bd-focus-tablet icon is-large">
                    <i className="fas fa-2x fa-tablet-alt"></i>
                  </span>
                  <span className="bd-focus-desktop icon is-large">
                    <i className="fas fa-3x fa-desktop"></i>
                  </span>
                </figure>
              </a>
              <a className="bd-focus-item column has-text-centered" href="#">
                <p className="title is-4">
                  <strong>Use your true identity</strong>
                </p>
                <p className="subtitle is-6">
                  Uprise uses a decentralized idenity, not one "owned" by a centralized authority or government
                </p>
                <figure className="bd-focus-icon">
                  <span className="bd-focus-css3 icon is-large">
                    <i className="fas fa-3x fa-eye"></i>
                  </span>
                </figure>
              </a>

              <a className="bd-focus-item column has-text-centered" href="#">
                <p className="title is-4">
                  <strong>No logistical overhead</strong>
                </p>
                <p className="subtitle is-6">
                  Payments are made via cryptographic tokens (which can be converted back to fiat at any time) 
                </p>
                <figure className="bd-focus-icon">
                  <span className="bd-focus-css3 icon is-large">
                    <i className="fab fa-3x fa-wpforms"></i>
                  </span>
                </figure>
              </a>
            </div>
            <br />
            <Link to="/identity" className="button is-primary is-large">
              <span>Get Started</span>
            </Link>
            &nbsp;&nbsp;
            <Link to="/tokens/all" className="button is-light is-large">
              <span>View Open Projects</span>
            </Link>
            <br />
            <br />
            <EosAccount />

          </div>

          <div className="column"></div>
        </div>
      </Hero>
    )
  }

}
