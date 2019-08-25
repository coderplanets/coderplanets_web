import React from 'react'
// eslint-disable-next-line import/named
import { ICON_CMD } from '@config'

import { Wrapper, InnerWrapper, SettingIcon } from './styles/footer'

const Footer = ({ pin, showFooterBarShadow }) => (
  <Wrapper pin={pin} dropShadow={showFooterBarShadow}>
    <InnerWrapper pin={pin}>
      <SettingIcon src={`${ICON_CMD}/setting.svg`} />
    </InnerWrapper>
  </Wrapper>
)

export default Footer
