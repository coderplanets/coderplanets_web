/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react'
import T from 'prop-types'
import ReactSVG from 'react-svg'
import dynamic from 'next/dynamic'

import NormalImg from './NormalImg'

// const NormalImg = ({ className, src, alt }) => (
//   <img className={className} src={src} alt={alt} />
// )

const Fuck = dynamic({
  loader: () => import('./NormalImg'),
  // eslint-disable-next-line react/display-name
  loading: () => <div>l</div>,
  ssr: false,
})

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
  return (
    <NormalImg className={className} src={src} alt={alt} />
    // <Suspense fallback={<div>x</div>}>
    //   <NormalImg className={className} src={src} alt={alt} />
    // </Suspense>
  )
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
