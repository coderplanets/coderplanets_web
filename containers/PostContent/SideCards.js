import React from 'react'
import R from 'ramda'

import { CommunityList } from '../../components'

import {
  CardWrapper,
  SidebarTitle,
  SidebarDesc,
  TagDot,
  TagWrapper,
  TagTitle,
  NomoreDesc,
} from './styles/side_cards'

import { uid } from '../../utils'

const Tags = ({ data }) => {
  if (R.isEmpty(data)) return <NomoreDesc>无标签</NomoreDesc>

  return (
    <React.Fragment>
      {data.map(t => (
        <TagWrapper key={uid.gen()}>
          <TagDot color={t.color} />
          <TagTitle>{t.title}</TagTitle>
        </TagWrapper>
      ))}
    </React.Fragment>
  )
}

const SideCards = ({ data }) => (
  <CardWrapper>
    <SidebarTitle>所属社区</SidebarTitle>
    <SidebarDesc>
      <CommunityList
        items={data.communities}
        emptyHint={<NomoreDesc>不属于任何社区</NomoreDesc>}
      />
    </SidebarDesc>
    <SidebarTitle>标签</SidebarTitle>

    <SidebarDesc column noBottom>
      <Tags data={data.tags} />
    </SidebarDesc>
  </CardWrapper>
)

export default SideCards
