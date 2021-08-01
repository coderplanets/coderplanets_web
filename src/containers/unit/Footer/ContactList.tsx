import { FC, memo } from 'react'

import { ICON_CMD, EMAIL_SUPPORT } from '@/config'
import { joinUS } from '@/utils/helper'

import { Wrapper, Item, Icon } from './styles/contact_list'

const SocialList: FC = () => (
  <Wrapper>
    <a href={`mailto:${EMAIL_SUPPORT}`}>
      <Item>
        <Icon src={`${ICON_CMD}/social_email.svg`} />
      </Item>
    </a>

    <Item onClick={() => joinUS()}>
      <Icon src={`${ICON_CMD}/footer_weixin.svg`} />
    </Item>

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

export default memo(SocialList)
