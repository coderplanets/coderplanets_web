import React from 'react'

import { ICON_CMD } from '../../config'
import { Wrapper, ErrorIcon, Info, Title, Desc } from './styles/header'

import { ERR } from '../../utils'

const Header = () => {
  const type = ERR.CRAPHQL
  switch (type) {
    case ERR.NETWORK:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-network.svg`} />
          <Info>
            <Title>网络错误 (NETWORK)</Title>
            <Desc>container/xxxx</Desc>
          </Info>
        </Wrapper>
      )

    case ERR.TIMEOUT:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-timeout.svg`} />
          <Info>
            <Title>超时错误 (TIMEOUT)</Title>
            <Desc>container/xxxx</Desc>
          </Info>
        </Wrapper>
      )

    default:
      return (
        <Wrapper>
          <ErrorIcon src={`${ICON_CMD}/error-graphql.svg`} />
          <Info>
            <Title>GraphQL 请求错误 (QUERY)</Title>
            <Desc>container/xxxx</Desc>
          </Info>
        </Wrapper>
      )
  }
}

export default Header
