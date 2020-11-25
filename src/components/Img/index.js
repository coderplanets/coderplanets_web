/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import T from 'prop-types'
import { ReactSVG } from 'react-svg'

import { buildLog } from '@/utils'

import NormalImg from './NormalImg'
import LazyLoadImg from './LazyLoadImg'

/* eslint-disable-next-line */
const log = buildLog('c:Img')

const Img = ({
  className,
  src,
  alt,
  loading,
  fallback,
  noLazy,
  scrollPosition,
  visibleByDefault,
  onClick,
}) => {
  if (/\.(svg)$/i.test(src)) {
    // see solution in:
    // https://github.com/tanem/react-svg/issues/676#issuecomment-589639104
    return (
      <ReactSVG
        src={src}
        beforeInjection={(svg) =>
          className
            .split(' ')
            .map((singleClassName) => svg.classList.add(singleClassName))
        }
        loading={() => <>{loading}</>}
        onClick={onClick}
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
  onClick: T.func,
}

Img.defaultProps = {
  alt: 'img',
  className: 'img-class',
  loading: null,
  fallback: null,
  noLazy: false,
  scrollPosition: null,
  visibleByDefault: false,
  onClick: log,
}

export default React.memo(Img)
