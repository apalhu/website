'use strict';
import React from 'react'

class SiteHeader extends React.Component {
  render() {
    const {route} = this.props
    const post = route.page.data
    return (
      <div className='text'>
        <h2>Título{ post.title }</h2>
        <div>Contenido ....</div>
        <div dangerouslySetInnerHTML={ {    __html: post.body} } />
        <h2>Artículos</h2>
      </div>
    );
  }
}

export default SiteHeader
