import React from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'
import Checker from '@/components/Checker'

import {
  Wrapper,
  Header,
  Title,
  Section,
  Footer,
} from '../../styles/content/article_part'

import { nextStep, toggleTemplate } from '../../logic'

const ArticlePart = ({ useTemplate }) => {
  const valid = true

  return (
    <Wrapper>
      <Header>
        <Title>正文介绍</Title>
        <Checker
          checked={useTemplate}
          size="small"
          onChange={(checked) => toggleTemplate(checked)}
        >
          使用模板
        </Checker>
      </Header>
      <Section>ArticlePart</Section>
      <Footer>
        {valid && (
          <ArrowButton size="large" disabled={!valid} onClick={nextStep}>
            下一步
          </ArrowButton>
        )}
      </Footer>
    </Wrapper>
  )
}

export default React.memo(ArticlePart)
