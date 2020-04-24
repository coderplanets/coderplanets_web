/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import T from 'prop-types'
import ReactSVG from 'react-svg'

import NormalImg from './NormalImg'
// import LazyLoadImg from './LazyLoadImg'

const Img = ({ className, src, alt, loading, fallback }) => {
  if (/\.(svg)$/i.test(src)) {
    return (
      <ReactSVG
        svgClassName={className}
        src={src}
        loading={() => <React.Fragment>{loading}</React.Fragment>}
      />
    )
  }
  return (
    <NormalImg className={className} src={src} alt={alt} fallback={fallback} />
    // <LazyLoadImg className={className} src={src} alt={alt} fallback={fallback} />
  )
}

Img.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  loading: T.any,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
}

Img.defaultProps = {
  alt: 'img',
  className: 'img-class',
  loading: null,
  fallback: null,
}

export default React.memo(Img)
