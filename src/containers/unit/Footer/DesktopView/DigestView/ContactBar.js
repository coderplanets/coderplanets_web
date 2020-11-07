import React from 'react'

import { useDevice } from '@/hooks'
import EmailSubscriber from '@/components/EmailSubscriber'

import SocialList from '../../SocialList'
import {
  Wrapper,
  InnerWrapper,
} from '../../styles/desktop_view/digest_view/contact_bar'

const ContactBar = ({ layout, metric }) => {
  const { isMobile } = useDevice()

  return (
    <Wrapper>
      <InnerWrapper layout={layout} isMobile={isMobile} metric={metric}>
        <SocialList />
        {!isMobile && (
          <EmailSubscriber type="simple" placeholder="订阅社区动态" />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
