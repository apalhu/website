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
                  <Link to={prefixLink('/')} className={ location.pathname === prefixLink('/') ? "current" : null }> Home
                  </Link>
                </li>
                <li>
                  <Link to={prefixLink('/about/')} className={ location.pathname === prefixLink('/about/') ? "current" : null }> Qui Som
                  </Link>
                </li>
                <li>
                  <Link to={prefixLink('/cal/')} className={ location.pathname === prefixLink('/cal/') ? "current" : null }> Calendari d'activitats
                  </Link>
                </li>
                <li>
                  <Link to={prefixLink('/links/')} className={ location.pathname === prefixLink('/links/') ? "current" : null }> Enllaços d'interés
                  </Link>
                </li>
                <li>
                  <Link to={prefixLink('/declaracio/')} className={ location.pathname === prefixLink('/declaracio/') ? "current" : null }> Declaració Humanista Amsterdam
                  </Link>
                </li>
                <li>
                  <Link to={prefixLink('/contact/')} className={ location.pathname === prefixLink('/contact/') ? "current" : null }> Col·labora
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
