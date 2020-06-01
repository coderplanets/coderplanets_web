import React from 'react'
import T from 'prop-types'

import { Wrapper, Divider, WeekName, DateNum } from '../styles/card/date'

const Date = ({ size }) => {
  return (
    <Wrapper size={size}>
      <WeekName>周五</WeekName>
      <Divider size={size} />
      <DateNum>18</DateNum>
    </Wrapper>
  )
}

Date.propTypes = {
  size: T.oneOf(['default', 'small']),
}

Date.defaultProps = {
  size: 'default', // 'text',
}

export default React.memo(Date)
