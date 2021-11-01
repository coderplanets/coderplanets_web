import { FC, memo } from 'react'

import { cutRest } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import Checker from '@/widgets/Checker'
import DotDivider from '@/widgets/DotDivider'

import type { TProps as TBaseProps } from './index'

// import { TAG_VIEW } from '../constant'
import {
  Wrapper,
  Intro,
  Logo,
  Title,
  Name,
  Raw,
  Digest,
  CheckWrapper,
} from '../../styles/community_setter/community_card/normal'

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
          {item?.title?.length < 8 && (
            <>
              <DotDivider space={5} />
              <Raw>{item.raw}</Raw>
            </>
          )}

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
        {item?.title?.length >= 8 && (
          <>
            <Raw>{item.raw}</Raw>
          </>
        )}
        <Digest>
          {cutRest(item.desc, 24)}
          {/* {cutRest('may be the most sexiest item for developer, ever', 20)} */}
        </Digest>
      </Intro>
    </Wrapper>
  )
}

export default memo(CommunityCard)
