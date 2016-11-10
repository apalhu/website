import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>
              <ul>
                <li>
                  <a href={ config.siteFacebook } target="_blank"><i className='fa fa-facebook'></i></a>
                </li>
                <li>
                  <a href={ config.siteEmailUrl }><i className='fa fa-envelope-o'></i></a>
                </li>
              </ul>

            </div>
            );
    }
}

export default SiteLinks
