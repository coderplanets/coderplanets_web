import { FC, memo } from 'react'

// import IconButton from '@/widgets/Buttons/IconButton'
import type { TCommunityView, TTexts } from '../spec'

import { Wrapper, Title } from '../styles/community_setter/header'
// import { useStore } from '../logic'

// import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

type TProps = {
  view: TCommunityView
  texts: TTexts
}

const Header: FC<TProps> = ({ view, texts }) => {
  return (
    <Wrapper>
      <Title>{texts.header}</Title>
      {/* <Actions>
        <IconButton
          path="article/community-mirror.svg"
          size={18}
          hintDelay={0}
          hint="镜像到其他社区"
          active={action === COMMUNITY_ACTION.MIRROR}
        />
        <IconButton
          path="article/community-move.svg"
          size={18}
          hintDelay={0}
          hint="移动到其他社区"
          active={action === COMMUNITY_ACTION.MOVE}
        />
      </Actions> */}
    </Wrapper>
  )
}

export default memo(Header)
