import React, {
  Component
} from 'react'

import Hero from '@/components/hero'

export default class NotFound extends React.Component {

  render () {
    return (
      <Hero>
        <div className="columns">
          <div className="column" />
          <div className="column is-two-thirds">
            <h1 className="title">
              404: Page Not Found
            </h1>
          </div>
          <div className="column" />
        </div>
      </Hero>
    )
  }

}
