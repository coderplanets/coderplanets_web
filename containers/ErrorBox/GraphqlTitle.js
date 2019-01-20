import React from 'react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { Title } from './styles/header'

const GraphQLTitle = ({ type }) => {
  switch (type) {
    case 'changeset':
      return <Title>请求错误 (ChangeSet)</Title>
    case 'parse':
      return <Title>请求错误 (GraphQL解析错误)</Title>
    case 'custom':
      return <Title>请求错误 (自定义错误)</Title>

    default:
      return <div>GraphQLTitle</div>
  }
}

export default GraphQLTitle
