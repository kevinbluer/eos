import React, { Component } from 'react'

import Hero from '@/components/hero'

// This is a Higher Order Component (HOC) that wraps up any components that require
// an unlocked Web3 account instance
export default function(WrappedComponent) {

  // ...and returns another component...
  const EOSWrap = class extends Component {

    render () {
      var contents = <div />

      return <WrappedComponent {...this.props} />
    }

  }

  return EOSWrap;

}
