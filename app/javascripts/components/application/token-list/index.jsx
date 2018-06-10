import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Hero from '@/components/hero'
import TokenListItem from './token-list-item'
import ProjectItem from './project-item'

import ImagePlaceholderImage1 from '@/../images/1.jpg'
import ImagePlaceholderImage2 from '@/../images/2.jpg'
import ImagePlaceholderImage3 from '@/../images/3.jpg'

const TokenList = class extends Component {
  render () {
    var content
    if (this.props.tokens.length) {
      var tokens = [...this.props.tokens].reverse()
      content =
        <section className='section'>
          <div className='container'>
            <div className="columns is-multiline">
                {
                  tokens.map(
                    token => {
                      return (
                        <div key={token.transactionHash} className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
                          <TokenListItem token={token} />
                        </div>
                      )
                    }
                  )
                }
            </div>
          </div>
        </section>
    } else {
      content =
        <Hero>
          <h4>Sample Projects</h4>
          <br />
          <div className="columns">
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`/${ImagePlaceholderImage1}`} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">

                    <div className="media-content">
                      <p className="title is-4">Image classification</p>
                      <p className="subtitle is-6">@jane</p>
                    </div>
                  </div>

                  <div className="content">
                    Identify & classify objects from blurred images and videos.
                    <br />
                    <span>Posted - 27 Feb 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`/${ImagePlaceholderImage2}`} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">

                    <div className="media-content">
                      <p className="title is-4">Household Income Survey</p>
                      <p className="subtitle is-6">@john</p>
                    </div>
                  </div>

                  <div className="content">
                    Perform household annual income survey for South East Asian market.
                    <br />
                    <span>Posted - 18 March 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`/${ImagePlaceholderImage3}`} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">

                    <div className="media-content">
                      <p className="title is-4">Transcribe audio recording</p>
                      <p className="subtitle is-6">@jean</p>
                    </div>
                  </div>

                  <div className="content">
                    Donec ullamcorper nulla non metus auctor fringilla..
                    <br />
                    <span>Posted - 11 Jan 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<h1 className='title has-text-grey-light has-text-centered'>
            Nobody has submitted any projects yet.
          </h1>*/}
          <hr />
        </Hero>
    }

    return content;
  }
}

TokenList.propTypes = {
  tokens: PropTypes.array.isRequired
}

TokenList.defaultProps = {
  tokens: []
}

export default TokenList
