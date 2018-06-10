import React, {
  Component
} from 'react'

import Hero from '@/components/hero'

const scatter = window.scatter;

export default class NotFound extends React.Component {

  onClickIdentity() {

    // You can require certain fields
    window.eosScatter.getIdentity().then(identity => {
        //...
    }).catch(error => {
        //...
    });

  }

  render () {

    return (
      <Hero>
        <div className="columns">
          <div className="column" />
          <div className="column is-two-thirds">
            <h1 className="title">
              Create Your Idenity with Scatter
            </h1>
            <p><strong>What is Scatter?</strong> Scatter is a decentralized signature, identity, private data and authentication solution. It runs locally on your machine and is powered by asymmetrical encryption allowing you to authenticate with websites without hitting a centralized server.</p>
            <br />
            <section className="box">
                <figure className="header">
                    <h3>
                        You don’t have an account here yet!
                    </h3>
                </figure>
                <p>
                    Account registration is the bane of our existence.
                    We all hate entering our personal information over
                    and over again to the point where we’ve even
                    resorted to trusting Facebook to keep us safe.
                    <br/ ><br />
                </p>
                <button className="button is-primary is-large" onClick={(e) => this.onClickIdentity()}>Provide Identity</button>
            </section>
          </div>
          <div className="column" />
        </div>
      </Hero>
    )
  }

}
