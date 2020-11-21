import React from 'react'

import { ArrowButton } from '@/components/Buttons'
import { Wrapper, Section, Footer } from '../styles/content/launch_part'

import { nextStep } from '../logic'

const LaunchPart = () => {
  const valid = true

  return (
    <Wrapper>
      <Section>LaunchPart</Section>

      <Footer>
        {valid && (
          <ArrowButton size="large" disabled={!valid} onClick={nextStep}>
            发布
          </ArrowButton>
        )}
      </Footer>
    </Wrapper>
  )
}

export default React.memo(LaunchPart)
