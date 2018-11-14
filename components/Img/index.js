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

const Img = ({ className, src, alt, loading }) => {
  if (/\.(svg)$/i.test(src)) {
    return (
      <ReactSVG
        svgClassName={className}
        src={src}
        loading={() => <React.Fragment>{loading}</React.Fragment>}
      />
    )
  }
  return <NormalImg className={className} src={src} alt={alt} />
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.any,
}

Img.defaultProps = {
  alt: 'image',
  className: 'img-class',
  loading: null,
}

export default Img
