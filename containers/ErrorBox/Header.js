import React from 'react'

import { ICON_CMD } from '../../config'

import GraphQLTitle from './GraphqlTitle'

import { Wrapper, ErrorIcon, Info, Title, Desc } from './styles/header'

import { ERR } from '../../utils'

const Header = ({ type, operation, graphqlType }) => {
  switch (type) {
    case ERR.NETWORK:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-network.svg`} />
          <Info>
            <Title>网络错误 (NETWORK)</Title>
            <Desc>{operation}</Desc>
          </Info>
        </Wrapper>
      )

    case ERR.TIMEOUT:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-timeout.svg`} />
          <Info>
            <Title>超时错误 (TIMEOUT)</Title>
            <Desc>{operation}</Desc>
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

export default Header
