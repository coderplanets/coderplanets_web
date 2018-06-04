/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

const NormalImg = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
)

const Img = ({ className, src, alt }) => {
  if (/\.(svg)$/i.test(src)) {
    return <ReactSVG svgClassName={className} path={src} />
  }
  return <NormalImg className={className} src={src} alt={alt} />
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

Img.defaultProps = {
  alt: 'coderplanets image',
  className: 'img-class',
}

export default Img
