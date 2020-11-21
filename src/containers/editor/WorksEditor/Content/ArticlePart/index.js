import React from 'react'

import { ArrowButton } from '@/components/Buttons'
import CheckBox from '@/components/CheckBox'

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
        <CheckBox
          checked={useTemplate}
          onChange={(checked) => toggleTemplate(checked)}
          size="small"
        >
          使用模板
        </CheckBox>
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
