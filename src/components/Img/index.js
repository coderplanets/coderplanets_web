/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import T from 'prop-types'
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
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  loading: T.any,
}

Img.defaultProps = {
  alt: 'image',
  className: 'img-class',
  loading: null,
}

export default React.memo(Img)
