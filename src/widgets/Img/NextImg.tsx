import { FC, Fragment, ReactNode, memo, useState } from 'react'
import Image from 'next/image'

import { Wrapper, FallbackWrapper } from './styles/lazy_load_image'

type TProps = {
  className?: string
  src: string
  alt?: string
  fallback?: ReactNode | null
  // visibleByDefault?: boolean
}

/**
 * lazy load images like .jpg .jpeg .png  etc
 * the fallback is for the image offen block in china, like github avatars
 * fallback 常被用于图片间歇性被墙的情况，比如 github 头像等
 */
const NextImg: FC<TProps> = ({
  className = 'img-class',
  src,
  alt = 'image',
  fallback = null,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Wrapper>
      <FallbackWrapper>
        {!imgLoaded && <Fragment>{fallback}</Fragment>}
      </FallbackWrapper>
      <Image
        className={className}
        src={src}
        alt={alt}
        placeholder="blur"
        onLoadStart={() => setImgLoaded(true)}
      />
    </Wrapper>
  )
}

export default memo(NextImg)
