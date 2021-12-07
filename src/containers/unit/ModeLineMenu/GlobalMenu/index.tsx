import { FC, memo } from 'react'

import MorePanel from '@/widgets/Navigator/MorePanel'
import { SpaceGrow } from '@/widgets/Common'

import HomeNavi from './HomeNavi'
import {
  Wrapper,
  HomeBlock,
  // JoinLink,
  // ArrowIcon,
} from '../styles/global_menu/main_menu'

const GlobalMenu: FC = () => {
  return (
    <Wrapper>
      <HomeBlock>
        <HomeNavi />
        <SpaceGrow />
        {/* <JoinLink>
          <div>参与共建</div>
          <ArrowIcon />
        </JoinLink> */}
      </HomeBlock>
      <MorePanel />
    </Wrapper>
  )
}

export default memo(GlobalMenu)
