import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import range from 'lodash.range'
import classnames from 'classnames'

import nfToken from '@/contracts/nfTokenFactory'

import { addTokenAction } from '@/redux/actions'

import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'

import style from './style.scss'

const MyCustomComponent = class extends Component {

  render() {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }

}


const CustomizeToken = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      price: '',
      tokenType: 0,
      title: '',
      titleError: '',
      errorMessage: '',
      redirectToTokenList: false
    }
  }

  async componentDidMount() {
    try {
      let contractInstance = await nfToken(window.web3);
      let price = await contractInstance.getCurrentPrice();

      this.setState({ price: price.toString() })
    } catch(error) {
      toastr.error('Error', error.message)
    }
  }

  async onClickSave () {
    // Reset the error handling
    this.setState({ titleError: '' })

    // TODO: Replace these magic numbers with an app-wide config:
    if (this.state.title.length < 1) {
      this.setState({ titleError: 'Please enter at least 1 character for the title' })
    } else {
      try {
        let contractInstance = await nfToken(window.web3);

        const txHash = await contractInstance.buyToken.sendTransaction(
          this.state.tokenType,
          this.state.title,
          { value: this.state.price }
        )

        this.props.addToken({ transactionHash: txHash })
        this.setState({ redirectToTokenList: true })
        toastr.success('Success', 'The transaction has been broadcast.')
      } catch(err) {
        toastr.error('Error', 'The transaction was cancelled or rejected.')
      }
    }
  }

  onClickTokenType (index) {
    this.setState({ tokenType: index })
  }

  render () {
    if (this.state.redirectToTokenList)
      return <Redirect to={'/tokens/all'} />

    if (this.state.titleError)
      var titleError =
        <p className="help is-danger">{this.state.titleError}</p>

    if (this.state.errorMessage)
      var errorMessage = <p className='help is-danger'>{this.state.errorMessage}</p>

    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-half-desktop'>

              <div className="etherplate-form">
                <div className="etherplate-form--wrapper">

                  <h2>Submit Project</h2>

                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        placeholder={`Project name`}
                        className="input"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    {titleError}
                  </div>

                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <textarea
                        rows="5"
                        placeholder={`Project description`}
                        className="input"
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Budget</label>
                    <div className="control">
                      <input
                        placeholder={`Project budget`}
                        className="input"
                        value={this.state.budget}
                        onChange={(e) => this.setState({ budget: e.target.value })} />
                    </div>
                  </div>

                  <br />
                  <p>
                    <button
                      disabled={this.state.selectedToken === null}
                      className={classnames('button is-success is-medium')}
                      onClick={(e) => this.onClickSave()}>
                      Submit Project
                    </button>
                  </p>
                  {errorMessage}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToken: (token) => {
      dispatch(addTokenAction(token))
    }
  }
}

export default connect(null, mapDispatchToProps)(CustomizeToken)
