import React from 'react'

import { ICON_CMD } from '@/config'
import { ERR } from '@/constant'

import GraphQLTitle from './GraphqlTitle'

import { Wrapper, ErrorIcon, Info, Title, Desc } from './styles/header'

const getPath = (path) => {
  if (!path) return '---'

  return `containers/${path}/logic`
}

const Header = ({ type, operation, path, graphqlType }) => {
  switch (type) {
    case ERR.NETWORK:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-network.svg`} />
          <Info>
            <Title>网络错误 (NETWORK)</Title>
            <Desc>{getPath(path)}</Desc>
          </Info>
        </Wrapper>
      )

    case ERR.TIMEOUT:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-timeout.svg`} />
          <Info>
            <Title>超时错误 (TIMEOUT)</Title>
            <Desc>{getPath(path)}</Desc>
          </Info>
        </Wrapper>
      )

    default:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-graphql.svg`} />
          <Info>
            <GraphQLTitle type={graphqlType} />
            <Desc>{operation}</Desc>
          </Info>
        </Wrapper>
      )
  }
}

export default React.memo(Header)
