import React from 'react'
import T from 'prop-types'

import { GALLERY } from '@/constant'
import { Wrapper, Divider, WeekName, DateNum } from '../styles/card/date'

const Date = ({ type }) => {
  return (
    <Wrapper type={type}>
      <WeekName>周五</WeekName>
      <Divider type={type} />
      <DateNum>18&nbsp;/&nbsp;04</DateNum>
    </Wrapper>
  )
}

Date.propTypes = {
  type: T.oneOf([GALLERY.TEXT_ONLY, GALLERY.TEXT_WITH_IMAGE]).isRequired,
}

Date.defaultProps = {}

export default React.memo(Date)
