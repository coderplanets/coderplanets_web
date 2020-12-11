import React from 'react'

import { ICON } from '@/config'
import { Wrapper, UpIcon, Number } from './styles/monthly_warning'

const MonthlyWarning = () => {
  return (
    <Wrapper>
      ：较年付费用 <UpIcon src={`${ICON}/shape/grow-up.svg`} />
      <Number>20%</Number>
    </Wrapper>
  )
}

export default React.memo(MonthlyWarning)
