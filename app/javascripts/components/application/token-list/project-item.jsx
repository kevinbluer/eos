import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

import ImagePlaceholderImage from '@/../images/1.jpg'


const ProjectItem = class extends Component {



  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={`/${ImagePlaceholderImage}`} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">

              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <span>11:09 PM - 1 Jan 2016</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem;
