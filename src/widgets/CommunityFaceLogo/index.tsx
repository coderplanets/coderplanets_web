/*
 *
 * CommunityFaceLogo
 *
 */

import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { HCN } from '@/constant'
// import { ICON_BASE } from '@/config'
import { buildLog } from '@/utils/logger'

import { Logo, HomeLogo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityFaceLogo:index')

type TProps = {
  noFill?: boolean
  src?: string
  raw?: string
  loading?: boolean | null
  className?: string
  noLazy?: boolean
}

const CommunityFaceLogo: FC<TProps> = ({
  noFill = false,
  src = '',
  raw = HCN,
  loading,
  className = 'community-facelogo-class',
  noLazy = false,
}) => {
  if (raw === HCN || isEmpty(src)) {
    return <HomeLogo className={className} />
  }

  return (
    <Logo
      noFill={noFill}
      src={src}
      loading={loading}
      className={className}
      noLazy={noLazy}
    />
  )
}

export default memo(CommunityFaceLogo)
