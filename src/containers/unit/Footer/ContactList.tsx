import { FC, memo } from 'react'

import { GITHUB, EMAIL_SUPPORT } from '@/config'
import { joinUS } from '@/utils/helper'

import { Wrapper, Item, Icon } from './styles/contact_list'

const SocialList: FC = () => (
  <Wrapper>
    <a href={`mailto:${EMAIL_SUPPORT}`}>
      <Item>
        <Icon.Email />
      </Item>
    </a>

    <Item onClick={() => joinUS()}>
      <Icon.WeChat />
    </Item>

    <a href={`${GITHUB}`} rel="noopener noreferrer" target="_blank">
      <Item>
        <Icon.Github />
      </Item>
    </a>
  </Wrapper>
)

export default memo(SocialList)
