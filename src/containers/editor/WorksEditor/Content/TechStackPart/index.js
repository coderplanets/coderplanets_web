import React from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'
import { Wrapper, Section, Footer } from '../../styles/content/tech_stack_part'

import { nextStep } from '../../logic'

const TechStackPart = () => {
  const valid = true

  return (
    <Wrapper>
      <Section>TechStackPart</Section>

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

export default React.memo(TechStackPart)
