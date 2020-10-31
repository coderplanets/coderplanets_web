import React from 'react'

import { isMobile } from '@/utils'
import EmailSubscriber from '@/components/EmailSubscriber'

import SocialList from '../../SocialList'
import {
  Wrapper,
  InnerWrapper,
} from '../../styles/desktop_view/digest_view/contact_bar'

const ContactBar = ({ layout }) => {
  return (
    <Wrapper>
      <InnerWrapper layout={layout} isMobile={isMobile}>
        <SocialList />
        {!isMobile && (
          <EmailSubscriber type="simple" placeholder="订阅社区动态" />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
