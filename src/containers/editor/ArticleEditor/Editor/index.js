import React from 'react'

import { ArrowButton } from '@/components/Buttons'
import Header from './Header'

import { Wrapper, ContentWrapper, Footer } from '../styles/editor'
import { nextStep } from '../logic'

const Editor = ({ showSubTitle }) => {
  return (
    <Wrapper>
      <Header showSubTitle={showSubTitle} />
      <ContentWrapper>
        <div>正文内容 ... </div>
      </ContentWrapper>
      <Footer>
        <ArrowButton size="large" onClick={nextStep} dimWhenIdle>
          下一步
        </ArrowButton>
      </Footer>
    </Wrapper>
  )
}

export default React.memo(Editor)
