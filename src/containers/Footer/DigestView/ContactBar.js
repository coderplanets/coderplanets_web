import React from 'react'

import { useMedia } from '@/hooks'
import EmailSubscriber from '@/components/EmailSubscriber'

import SocialList from '../SocialList'
import { Wrapper, InnerWrapper } from '../styles/digest_view/contact_bar'

const ContactBar = ({ layout }) => {
  const { mobile } = useMedia()

  return (
    <Wrapper>
      <InnerWrapper layout={layout} mobile={mobile}>
        <SocialList />
        {!mobile && (
          <EmailSubscriber type="simple" placeholder="订阅社区动态" />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
