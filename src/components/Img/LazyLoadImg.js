import React, { useState } from 'react'
import T from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Wrapper, FallbackWrapper } from './styles/lazy_load_image'

/**
 * lazy load images like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const LazyLoadImg = ({
  className,
  src,
  alt,
  fallback,
  scrollPosition,
  visibleByDefault,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Wrapper>
      <FallbackWrapper>
        {!imgLoaded && <React.Fragment>{fallback}</React.Fragment>}
      </FallbackWrapper>
      <LazyLoadImage
        className={className}
        src={src}
        alt={alt}
        // placeholder={<PlaceHolder child={fallback} />}
        effect="blur"
        scrollPosition={scrollPosition}
        visibleByDefault={visibleByDefault}
        afterLoad={() => setImgLoaded(true)}
      />
    </Wrapper>
  )
}

LazyLoadImg.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
  scrollPosition: T.any,
  visibleByDefault: T.bool.isRequired,
}

LazyLoadImg.defaultProps = {
  alt: 'image',
  className: 'img-class',
  fallback: null,
  scrollPosition: null,
}

export default React.memo(LazyLoadImg)
