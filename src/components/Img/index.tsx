/*
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import { FC, Fragment, ReactNode, memo } from 'react'
import { ReactSVG } from 'react-svg'

import { buildLog } from '@/utils/logger'

import NormalImg from './NormalImg'
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
    <Fragment>
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
    </Fragment>
  )
}

// Img.propTypes = {
//   src: T.string.isRequired,
//   alt: T.string,
//   className: T.string,
//   loading: T.any,
//   fallback: T.oneOfType([T.node, T.instanceOf(null)]),
//   noLazy: T.bool,
//   scrollPosition: T.any,
//   // see https://www.npmjs.com/package/react-lazy-load-image-component
//   visibleByDefault: T.bool,
//   onClick: T.func,
// }

// Img.defaultProps = {
//   alt: 'img',
//   className: 'img-class',
//   loading: null,
//   fallback: null,
//   noLazy: false,
//   scrollPosition: null,
//   visibleByDefault: false,
//   onClick: log,
// }

export default memo(Img)
