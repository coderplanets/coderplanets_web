/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import PropTypes from 'prop-types'

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Img.defaultProps = {
  className: undefined,
}

export default Img
