import { FC, memo } from 'react'
import { keys } from 'ramda'

import { ICON } from '@/config'

import { SpaceGrow } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'

import { GROUPS } from './constant'
import {
  Wrapper,
  WechatLogo,
  Title,
  SelectWrapper,
  Letter,
} from './styles/header'
import { switchGroup } from './logic'

type TProps = {
  activeGroup: string
}

const Header: FC<TProps> = ({ activeGroup }) => {
  return (
    <Wrapper>
      <Title>
        <WechatLogo src={`${ICON}/social/wechat-share.png`} /> 加入微信群
      </Title>
      <SpaceGrow />
      <SelectWrapper>
        {keys(GROUPS).map((group) => (
          <Tooltip key={group} content={GROUPS[group].title}>
            <Letter
              $active={activeGroup === group}
              onClick={() => switchGroup(group)}
            >
              {group}
            </Letter>
          </Tooltip>
        ))}
      </SelectWrapper>
    </Wrapper>
  )
}

export default memo(Header)
