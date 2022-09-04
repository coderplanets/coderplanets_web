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
const log = buildLog('w:CommunityFaceLogo:index')

type TProps = {
  noFill?: boolean
  src?: string
  raw?: string
  className?: string
  noLazy?: boolean
}

const CommunityFaceLogo: FC<TProps> = ({
  noFill = false,
  src = '',
  raw = HCN,
  className = 'community-facelogo-class',
  noLazy = false,
}) => {
  if (raw === HCN || isEmpty(src)) {
    return <HomeLogo className={className} />
  }

  return (
    <Logo noFill={noFill} src={src} className={className} noLazy={noLazy} />
  )
}

export default memo(CommunityFaceLogo)
