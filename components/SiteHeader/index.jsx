'use strict';
import React from 'react'

class SiteHeader extends React.Component {
  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <div className='main-inner'>
        <h2>Compartint una visió racional, crítica, científica i ètica del món</h2>
      </div>
    );
  }
}

export default SiteHeader
