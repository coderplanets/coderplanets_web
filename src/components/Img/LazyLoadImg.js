import React from 'react'
import T from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'
// import { Image } from './styles'

/**
 * normal image like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const LazyLoadImg = ({ className, src, alt, fallback }) => {
  return (
    <>
      <LazyLoadImage
        className={className}
        src={src}
        alt={alt}
        placeholder={fallback}
      />
    </>
  )
}

LazyLoadImg.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
}

LazyLoadImg.defaultProps = {
  alt: 'image',
  className: 'img-class',
  fallback: null,
}

export default React.memo(LazyLoadImg)
