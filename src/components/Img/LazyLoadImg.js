import React, { useState } from 'react'
import T from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'

// NOTE: the blur effect css is located in thirdPartyOverWrite.js

// NOTE: do not use fallback directly, it will block the image display
// seems the LazyLoadImage's issue
const PlaceHolder = ({ child }) => {
  // <div style={{ height: '20px', width: '20px', background: '#139C9E' }}>
  return <div>{child}</div>
}

/**
 * lazy load images like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const LazyLoadImg = ({ className, src, alt, fallback, scrollPosition }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <React.Fragment>
      {imgError && fallback ? (
        <React.Fragment>{fallback}</React.Fragment>
      ) : (
        <LazyLoadImage
          className={className}
          src={src}
          alt={alt}
          placeholder={<PlaceHolder child={fallback} />}
          effect="blur"
          scrollPosition={scrollPosition}
          beforeLoad={() => {
            const picture = new Image()
            picture.src = src
            picture.onload = () => {
              if (picture.naturalWidth + picture.naturalHeight === 0) {
                setImgError(true)
              }
            }
            picture.onerror = () => setImgError(true)
          }}
        />
      )}
    </React.Fragment>
  )
}

LazyLoadImg.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
  scrollPosition: T.any,
}

LazyLoadImg.defaultProps = {
  alt: 'image',
  className: 'img-class',
  fallback: null,
  scrollPosition: null,
}

export default React.memo(LazyLoadImg)
