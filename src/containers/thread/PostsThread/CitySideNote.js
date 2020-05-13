import React from 'react'

import { ISSUE_ADDR } from '@/config'
import { Wrapper, Title, Divider, Desc, Linker } from './styles/city_side_note'

const CitySideNote = () => (
  <Wrapper>
    <Title>没有你所在的城市?</Title>
    <Divider />
    <Desc>
      你可以在 Github 上
      <Linker
        href={`${ISSUE_ADDR}/334`}
        rel="noopener noreferrer"
        target="_blank"
      >
        参与创建
      </Linker>
      你的城市。
    </Desc>
    <br />
    <Title>意见与反馈</Title>
    <Divider />
    <Desc>
      你的意见非常重要，欢迎参与
      <Linker
        href={`${ISSUE_ADDR}/334`}
        rel="noopener noreferrer"
        target="_blank"
      >
        社区讨论
      </Linker>
      。
    </Desc>
  </Wrapper>
)

export default React.memo(CitySideNote)
