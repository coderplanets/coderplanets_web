import React from 'react'

import { GITHUB_WEB_ADDR, ISSUE_ADDR } from '@/config'
import { ROUTE } from '@/constant'
import DotDivider from '@/components/DotDivider'

import {
  SiteInfoWrapper,
  LinkInfoWrapper,
  Item,
  ItemBtn,
} from './styles/mobile_bottom_info'

import { queryDoraemon } from './logic'

const MobileBottomInfo = () => (
  <>
    <LinkInfoWrapper>
      <ItemBtn as="a" href={`/${ROUTE.DISCOVERY}`} rel="noopener noreferrer">
        所有社区
      </ItemBtn>
      <DotDivider radius="4px" />
      <ItemBtn onClick={() => queryDoraemon('/theme/')}>切换主题</ItemBtn>
    </LinkInfoWrapper>

    <SiteInfoWrapper>
      <Item href="/home/post/1" rel="noopener noreferrer" target="_blank">
        关于本站
      </Item>
      <DotDivider space="10px" radius="4px" />
      <Item
        href={`${GITHUB_WEB_ADDR}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        源代码
      </Item>
      <DotDivider space="10px" radius="4px" />
      <Item href={`${ISSUE_ADDR}`} rel="noopener noreferrer" target="_blank">
        反馈与建议
      </Item>
    </SiteInfoWrapper>
  </>
)

export default React.memo(MobileBottomInfo)
