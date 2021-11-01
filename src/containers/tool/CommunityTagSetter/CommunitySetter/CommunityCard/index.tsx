import { FC, memo } from 'react'

import type { TCommunity, TCommunitySetterStyle } from '@/spec'

import { COMMUNITY_STYLE } from '../../constant'
import Simple from './Simple'
import Normal from './Normal'

export type TProps = {
  item: TCommunity
  checked?: boolean
  canActOnSeleted: boolean
  onCommunitySelect: (community: TCommunity, select: boolean) => void

  communityStyle?: TCommunitySetterStyle
}

const CommunityCard: FC<TProps> = ({
  communityStyle = COMMUNITY_STYLE.NORMAL,
  ...restProps
}) => {
  if (communityStyle === COMMUNITY_STYLE.NORMAL) {
    return <Normal {...restProps} />
  }

  return <Simple {...restProps} />
}

export default memo(CommunityCard)
