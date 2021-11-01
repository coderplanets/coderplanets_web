import { FC, memo } from 'react'

import { SpaceGrow } from '@/widgets/Common'
import Checker from '@/widgets/Checker'

import type { TProps as TBaseProps } from './index'

// import { TAG_VIEW } from '../constant'
import {
  Wrapper,
  Intro,
  Logo,
  Title,
  Name,
  CheckWrapper,
} from '../../styles/community_setter/community_card/simple'

type TProps = Omit<TBaseProps, 'communityStyle'>

const CommunityCard: FC<TProps> = ({
  item,
  canActOnSeleted,
  checked = false,
  onCommunitySelect,
}) => {
  return (
    <Wrapper withHover={canActOnSeleted}>
      <Logo src={item.logo} raw={item.raw} noLazy />
      <Intro>
        <Title>
          <Name>{item.title}</Name>
          <SpaceGrow />
          <CheckWrapper>
            <Checker
              checked={checked}
              size="small"
              disabled={!canActOnSeleted}
              onChange={(checked) => onCommunitySelect(item, checked)}
            />
          </CheckWrapper>
        </Title>
      </Intro>
    </Wrapper>
  )
}

export default memo(CommunityCard)
