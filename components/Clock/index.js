import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledClock = styled.div`
  padding: 15px;
  color: #82fa58;
  display: inline-block;
  font: 50px menlo, monaco, monospace;
  background-color: #000;
  color: yellowgreen;
  font-size: 50px;
  .light {
    background-color: #999;
  }
`

const pad = n => (n < 10 ? `0${n}` : n)

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const Clock = props => {
  return (
    <div className={props.light ? 'light' : ''}>
      <StyledClock>{format(new Date(props.lastUpdate))}</StyledClock>
    </div>
  )
}

Clock.propTypes = {
  light: PropTypes.bool.isRequired,
  lastUpdate: PropTypes.number.isRequired,
}

export default Clock
