import React from 'react'

import Popover from '../../components/Popover'
import { ICON_CMD, EMAIL_SUPPORT } from '../../config'
import { Wrapper, Item, Icon, PopInfo } from './styles/social_list'

const SocialList = () => (
  <Wrapper>
    <a href={`mailto:${EMAIL_SUPPORT}`}>
      <Item>
        <Icon src={`${ICON_CMD}/social_email.svg`} />
      </Item>
    </a>

    <Popover
      placement="bottom"
      trigger="hover"
      content={<PopInfo>群号: 955466153</PopInfo>}
    >
      <Item>
        <Icon src={`${ICON_CMD}/qq.svg`} />
      </Item>
    </Popover>

    <a
      href="https://github.com/coderplanets/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Item>
        <Icon src={`${ICON_CMD}/github.svg`} />
      </Item>
    </a>
  </Wrapper>
)

export default SocialList
