import React from 'react'

import Popover from '@components/Popover'
import { ICON_CMD, ICON_BASE, EMAIL_SUPPORT } from '@config'

import { Wrapper, Item, Icon, QRCodePic } from './styles/social_list'

const SocialList = () => (
  <Wrapper>
    <a href={`mailto:${EMAIL_SUPPORT}`}>
      <Item>
        <Icon src={`${ICON_CMD}/social_email.svg`} />
      </Item>
    </a>

    <Popover
      placement="top"
      trigger="hover"
      content={<QRCodePic src={`${ICON_BASE}/cps_wechat_group.png`} />}
    >
      <Item>
        <Icon src={`${ICON_CMD}/footer_weixin.svg`} />
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

export default SocialList
