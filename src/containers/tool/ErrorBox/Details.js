import React from 'react'

// import { ICON_CMD } from '@/config'
import { ERR } from '@/constant'
import GraphqlDetail from './GraphqlDetail'

import { Wrapper, TitleWrapper, Dot, Title, Desc } from './styles/details'

const Details = ({
  type,
  timeoutError,
  graphqlType,
  changesetError,
  parseError,
  customError,
}) => {
  switch (type) {
    case ERR.NETWORK:
      return (
        <Wrapper>
          <TitleWrapper>
            <Dot />
            <Title>网络错误</Title>
          </TitleWrapper>
          <Desc>请检查您的网络设置.</Desc>
          <br />
          <TitleWrapper>
            <Dot />
            <Title>服务器发生错误</Title>
          </TitleWrapper>
          <Desc>
            若您的网络没有问题，很可能是服务器发生错误，恳请您提交 issue{' '}
          </Desc>
        </Wrapper>
      )

    case ERR.GRAPHQL:
      return (
        <GraphqlDetail
          graphqlType={graphqlType}
          changesetError={changesetError}
          parseError={parseError}
          customError={customError}
        />
      )

    case ERR.TIMEOUT:
      return (
        <Wrapper>
          <TitleWrapper>
            <Dot />
            <Title>请求超时</Title>
          </TitleWrapper>
          <Desc>{timeoutError}</Desc>
        </Wrapper>
      )

    default:
      return <div>unkonw detail</div>
  }
}

export default React.memo(Details)
