import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'

import type { TCommunityView, TCommunityAction } from '../spec'
import { COMMUNITY_ACTION } from '../constant'

import { Wrapper, Title, Actions } from '../styles/community_setter/header'
// import { useStore } from '../logic'

// import { LavaLampLoading } from '@/widgets/dynamic'

type TProps = {
  view: TCommunityView
  action: TCommunityAction
}

const getTitle = (action: TCommunityAction): string => {
  switch (action) {
    case COMMUNITY_ACTION.MIRROR: {
      return '镜像到其他社区'
    }
    default: {
      return '移动到其他社区'
    }
  }
}

const Header: FC<TProps> = ({ view, action }) => {
  // const store = useStore()

  return (
    <Wrapper>
      <Title>{getTitle(action)}</Title>
      <Actions>
        <IconButton
          path="article/community-mirror.svg"
          size={18}
          mRight={8}
          hintDelay={0}
          hint="镜像到其他社区"
          active={action === COMMUNITY_ACTION.MIRROR}
          // onClick={() => changeTagView(COMMUNITY_VIEW.RESULT)}
        />
        <IconButton
          path="article/community-move.svg"
          size={18}
          mRight={0}
          hintDelay={0}
          hint="移动到其他社区"
          active={action === COMMUNITY_ACTION.MOVE}
          // onClick={() => changeTagView(COMMUNITY_VIEW.RESULT)}
        />
      </Actions>
    </Wrapper>
  )
}

export default memo(Header)
