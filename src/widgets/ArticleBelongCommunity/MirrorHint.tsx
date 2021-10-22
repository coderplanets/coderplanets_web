import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

import Tooltip from '@/widgets/Tooltip'
import CommunityCard from '@/widgets/Cards/CommunityCard'

import {
  MirrorIcon,
  PopHint,
  SlashSign,
  MirrorCard,
} from './styles/mirror_hint'

type TProps = {
  communities: TCommunity[]
}

const MirrorHint: FC<TProps> = ({ communities }) => {
  return (
    <Tooltip
      content={
        <div>
          <PopHint>
            <SlashSign>&#47;&#47;</SlashSign>
            被以下社区镜像:
          </PopHint>
          {communities.map((c) => (
            <MirrorCard key={c.id}>
              <CommunityCard item={c} />
            </MirrorCard>
          ))}
        </div>
      }
      placement="bottom"
      delay={500}
    >
      <MirrorIcon />
    </Tooltip>
  )
}

export default memo(MirrorHint)
