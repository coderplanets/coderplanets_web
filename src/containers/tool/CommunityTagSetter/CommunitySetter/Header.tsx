import { FC, memo } from 'react'

// import IconButton from '@/widgets/Buttons/IconButton'
import type { TCommunityView, TType } from '../spec'
import { TYPE } from '../constant'

import { Wrapper, Title } from '../styles/community_setter/header'
// import { useStore } from '../logic'

// import { LavaLampLoading } from '@/widgets/dynamic'

type TProps = {
  view: TCommunityView
  type: TType
}

const getTitle = (type: TType): string => {
  switch (type) {
    case TYPE.MIRROR_COMMUNITY: {
      return '镜像到其他社区'
    }
    case TYPE.SELECT_COMMUNITY: {
      return '选择社区'
    }
    default: {
      return '移动到其他社区'
    }
  }
}

const Header: FC<TProps> = ({ view, type }) => {
  return (
    <Wrapper>
      <Title>{getTitle(type)}</Title>
      {/* <Actions>
        <IconButton
          path="article/community-mirror.svg"
          size={18}
          mRight={8}
          hintDelay={0}
          hint="镜像到其他社区"
          active={action === COMMUNITY_ACTION.MIRROR}
        />
        <IconButton
          path="article/community-move.svg"
          size={18}
          mRight={0}
          hintDelay={0}
          hint="移动到其他社区"
          active={action === COMMUNITY_ACTION.MOVE}
        />
      </Actions> */}
    </Wrapper>
  )
}

export default memo(Header)
