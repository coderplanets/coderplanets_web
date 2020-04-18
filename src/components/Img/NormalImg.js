import React, { useState, useEffect, useRef, useCallback } from 'react'
import T from 'prop-types'

import { Image } from './styles'

/**
 * normal image like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const NormalImg = ({ className, src, alt, fallback }) => {
  const ref = useRef(null)
  const [loadCheck, setLoadCheck] = useState(true)
  const [loadCheck2, setLoadCheck2] = useState(true)

  useEffect(() => {
    const image = ref.current
    if (image && image.complete) {
      image.naturalWidth === 0 ? setLoadCheck(false) : setLoadCheck(true)
    }
  }, [ref, loadCheck, loadCheck2])

  const handleOnLoad = useCallback(() => setLoadCheck2(true), [])
  const handleOnError = useCallback(() => {
    setLoadCheck(false)
    setLoadCheck2(false)
  }, [])

  const loaded = loadCheck && loadCheck2

  return (
    <React.Fragment>
      <Image
        loaded={!fallback || (fallback && loaded)}
        ref={ref}
        className={className}
        src={src}
        alt={alt}
        onLoad={handleOnLoad}
        onError={handleOnError}
      />
      {fallback && !loaded && <React.Fragment>{fallback}</React.Fragment>}
    </React.Fragment>
  )
}

NormalImg.propTypes = {
  src: T.string.isRequired,
  alt: T.string,
  className: T.string,
  fallback: T.oneOfType([T.node, T.instanceOf(null)]),
}

NormalImg.defaultProps = {
  alt: 'image',
  className: 'img-class',
  fallback: null,
}

export default React.memo(NormalImg)
