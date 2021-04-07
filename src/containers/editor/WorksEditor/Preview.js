import React from 'react'

// import { ICON_BASE } from '@/config'
import WorksCard from '@/components/Cards/WorksCard'
import { STEP } from './constant'

import { Wrapper } from './styles/preview'

const Preview = ({ step, works }) => {
  return (
    <Wrapper narrow={step === STEP.ZERO}>
      <WorksCard item={works} mode="preview" withBg />
    </Wrapper>
  )
}

export default React.memo(Preview)
