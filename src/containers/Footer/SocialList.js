import React from 'react'

import { ICON_CMD, EMAIL_SUPPORT } from '@config'
import { joinUS } from '@utils'

import { Wrapper, Item, Icon } from './styles/social_list'

const SocialList = () => (
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
    <a
      href="https://zhuanlan.zhihu.com/coderplanets"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Item>
        <Icon src={`${ICON_CMD}/zhihu_solid.svg`} />
      </Item>
    </a>
    <a
      href="https://union.zhaodao.ai/#random"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Item>
        <Icon src={`${ICON_CMD}/footer-makers-union.svg`} />
      </Item>
    </a>
  </Wrapper>
)

export default React.memo(SocialList)
