import { FC, memo } from 'react'

import ArrowButton from '@/components/Buttons/ArrowButton'
import { Wrapper, Section, Footer } from '../styles/content/launch_part'

import { nextStep } from '../logic'

const LaunchPart: FC = () => {
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

export default memo(LaunchPart)
