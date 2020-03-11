import React from 'react'

// import { ICON_CMD } from '@config'
import { Wrapper, Title, Tag } from './styles/git_source_tag'

const GitSourceTag = ({ title, addr }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Tag>
      <iframe
        title="souce_attr"
        src={addr}
        frameBorder="0"
        scrolling="0"
        width="80px"
        height="20px"
      />
    </Tag>
  </Wrapper>
)

export default React.memo(GitSourceTag)
