import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className={ location.pathname === prefixLink('/about/') ? "current" : null }> Qui Som
                  </Link>
                </li>
                <li>
                  <Link to="/cal/" className={ location.pathname === prefixLink('/cal/') ? "current" : null }> Calendari d'activitats
                  </Link>
                </li>
                <li>
                  <Link to="/declaracio/" className={ location.pathname === prefixLink('/declaracio/') ? "current" : null }> Declaració Humanista Amsterdam
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className={ location.pathname === prefixLink('/contact/') ? "current" : null }> Contacte
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
