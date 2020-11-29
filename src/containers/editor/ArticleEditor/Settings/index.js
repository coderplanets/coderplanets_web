import React from 'react'

import { ArrowButton, Button } from '@/components/Buttons'

import { Wrapper, ContentWrapper, Footer } from '../styles/settings'
import { previousStep, nextStep } from '../logic'

const Settings = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h3>社区设置</h3>
        <br />
        <h3>标签设置</h3>
        <br />
        <h3>文章设置</h3>
        <br />
        <h4>是否允许评论</h4>
        <h4>设置打赏</h4>
      </ContentWrapper>
      <Footer>
        <ArrowButton direction="left" onClick={previousStep} dimWhenIdle>
          返回编辑
        </ArrowButton>
        <Button size="large" type="primary" onClick={nextStep}>
          发&nbsp;布
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default React.memo(Settings)
