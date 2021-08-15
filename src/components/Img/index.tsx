/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import { FC, Fragment, ReactNode, memo } from 'react'
import { buildLog } from '@/utils/logger'

import SvgLoader from './SvgLoader'
import NormalImg from './NormalImg'
// import NextImg from './NextImg'
import LazyLoadImg from './LazyLoadImg'

/* eslint-disable-next-line */
const log = buildLog('c:Img')

type IProps = {
  src: string
  alt?: string
  className?: string
  loading?: boolean
  fallback?: ReactNode | null
  noLazy?: boolean
  scrollPosition?: any
  // see https://www.npmjs.com/package/react-lazy-load-image-component
  visibleByDefault?: boolean
  onClick?: () => void
}

const Img: FC<IProps> = ({
  className = 'img-class',
  src,
  alt = 'img',
  loading,
  fallback = null,
  noLazy = false,
  scrollPosition = null,
  visibleByDefault = false,
  onClick = log,
}) => {
  if (/\.(svg)$/i.test(src)) {
    // see solution in:
    // https://github.com/tanem/react-svg/issues/676#issuecomment-589639104
    return (
      <SvgLoader
        src={src}
        beforeInjection={(svg) =>
          className
            .split(' ')
            .map((singleClassName) => svg.classList.add(singleClassName))
        }
        onClick={onClick}
      />
    )
  }
  return (
    <div onClick={onClick}>
      {noLazy ? (
        <NormalImg
          className={className}
          src={src}
          alt={alt}
          fallback={fallback}
        />
      ) : (
        // <NextImg
        //   className={className}
        //   src={src}
        //   alt={alt}
        //   fallback={fallback}
        // />
        <LazyLoadImg
          className={className}
          src={src}
          alt={alt}
          fallback={fallback}
          scrollPosition={scrollPosition}
          visibleByDefault={visibleByDefault}
        />
      )}
    </div>
  )
}

export default memo(Img)
