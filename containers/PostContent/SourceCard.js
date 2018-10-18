import React from 'react'
import R from 'ramda'

import { CommunityList } from '../../components'

import {
  Wrapper,
  Title,
  Desc,
  TagDot,
  TagWrapper,
  TagTitle,
  NomoreDesc,
} from './styles/source_card'

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

const SourceCard = ({ data }) => (
  <Wrapper>
    <Title>所属社区</Title>
    <Desc>
      <CommunityList
        items={data.communities}
        emptyHint={<NomoreDesc>不属于任何社区</NomoreDesc>}
      />
    </Desc>
    <Title>标签</Title>

    <Desc column noBottom>
      <Tags data={data.tags} />
    </Desc>
  </Wrapper>
)

export default SourceCard
