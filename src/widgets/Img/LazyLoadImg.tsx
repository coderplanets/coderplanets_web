import { FC, Fragment, ReactNode, memo, useState } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Wrapper, FallbackWrapper } from './styles/lazy_load_image'

type TProps = {
  className?: string
  src: string
  alt?: string
  fallback?: ReactNode | null
  // scrollPosition: any
  visibleByDefault?: boolean
}

/**
 * lazy load images like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const LazyLoadImg: FC<TProps> = ({
  className = 'img-class',
  src,
  alt = 'image',
  fallback = null,
  visibleByDefault = true,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Wrapper>
      <FallbackWrapper>
        {!imgLoaded && <Fragment>{fallback}</Fragment>}
      </FallbackWrapper>
      <LazyLoadImage
        className={className}
        src={src}
        alt={alt}
        // placeholder={<PlaceHolder child={fallback} />}
        effect="blur"
        scrollPosition={null}
        visibleByDefault={visibleByDefault}
        afterLoad={() => setImgLoaded(true)}
      />
    </Wrapper>
  )
}

export default memo(LazyLoadImg)
