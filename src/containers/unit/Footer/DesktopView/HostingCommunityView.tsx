import { FC, memo } from 'react'

import type { TArticle, TC11NLayout } from '@/spec'
import { SITE_LOGO } from '@/config'

import BlinkCursor from '@/components/BlinkCursor'

import {
  Wrapper,
  InnerWrapper,
  SupportBadge,
  Logo,
  LinkText,
} from '../styles/desktop_view/hosting_community_view'

type TProps = {
  viewingArticle: TArticle
  metric: string
  layout: TC11NLayout
}

const HostingCommunityView: FC<TProps> = ({ metric, layout }) => {
  return (
    <Wrapper metric={metric} layout={layout}>
      <InnerWrapper>
        <SupportBadge>
          <Logo src={SITE_LOGO} />
          <BlinkCursor left={10} right={10} />
          <LinkText>由 coderplanets 提供支持</LinkText>
        </SupportBadge>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(HostingCommunityView)
