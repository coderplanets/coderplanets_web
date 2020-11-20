import React from 'react'

// import { ICON_BASE } from '@/config'
import WorksCard from '@/components/WorksCard'

import { Wrapper } from './styles/preview'

const Preview = ({ works }) => {
  return (
    <Wrapper>
      <WorksCard item={works} mode="preview" withBg />
    </Wrapper>
  )
}

export default React.memo(Preview)
