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
import LazyLoadImg from './LazyLoadImg'

const Img = ({
  className,
  src,
  alt,
  loading,
  fallback,
  noLazy,
  lazyLoadEffect,
}) => {
  if (/\.(svg)$/i.test(src)) {
    return (
      <ReactSVG
        svgClassName={className}
        src={src}
        loading={() => <>{loading}</>}
      />
    )
  }
  return (
    <React.Fragment>
      {noLazy ? (
        <NormalImg
          className={className}
          src={src}
          alt={alt}
          fallback={fallback}
        />
      ) : (
        <LazyLoadImg
          className={className}
          src={src}
          alt={alt}
          fallback={fallback}
          lazyLoadEffect={lazyLoadEffect}
        />
      )}
    </React.Fragment>
  )
}

Img.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  loading: T.any,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
  noLazy: T.bool,
  lazyLoadEffect: T.oneOf(['black-and-white', 'blur']),
}

Img.defaultProps = {
  alt: 'img',
  className: 'img-class',
  loading: null,
  fallback: null,
  noLazy: false,
  lazyLoadEffect: 'blur',
}

export default React.memo(Img)
