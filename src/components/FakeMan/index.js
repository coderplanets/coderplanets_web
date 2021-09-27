import React from 'react'

import {
  Wrapper,
  InnerWrapper,
  Title,
  Body,
  Desc,
  Link,
  Footer,
} from './styles/index'

const FakeMan = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div />
        <Body>
          <Title>CoderPlanets</Title>
          <Desc>可能是最酷的国内开发者平台</Desc>
          <Desc>2.0 版本即将开始内测，欢迎在 Github 上与我们联系。</Desc>
          <br />
          <Link href="https://github.com/coderplanets">Github</Link>
        </Body>
        <Footer>
          <Link
            href="https://beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            蜀ICP备17043722号-4
          </Link>
        </Footer>
      </InnerWrapper>
    </Wrapper>
  )
}

export default FakeMan
