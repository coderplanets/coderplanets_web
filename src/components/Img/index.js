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
  scrollPosition,
  visibleByDefault,
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
          scrollPosition={scrollPosition}
          visibleByDefault={visibleByDefault}
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
  scrollPosition: T.any,
  // see https://www.npmjs.com/package/react-lazy-load-image-component
  visibleByDefault: T.bool,
}

Img.defaultProps = {
  alt: 'img',
  className: 'img-class',
  loading: null,
  fallback: null,
  noLazy: false,
  scrollPosition: null,
  visibleByDefault: false,
}

export default React.memo(Img)
