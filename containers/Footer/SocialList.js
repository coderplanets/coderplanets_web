import React from 'react'

import { ICON_CMD } from '../../config'
import { Wrapper, Item, Icon } from './styles/social_list'

const SocialList = () => (
  <Wrapper>
    <Item>
      <Icon src={`${ICON_CMD}/social_email.svg`} />
    </Item>

    <Item>
      <Icon src={`${ICON_CMD}/qq.svg`} />
    </Item>

    <Item>
      <Icon src={`${ICON_CMD}/github.svg`} />
    </Item>
  </Wrapper>
)

export default SocialList
