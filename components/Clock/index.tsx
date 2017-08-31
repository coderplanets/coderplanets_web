import * as React from 'react'

import styled from 'styled-components'

const Clock = styled.div`
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

export default (props) => {
  return (
    <div className={props.light ? 'light' : ''}>
      <Clock>{format(new Date(props.lastUpdate))}</Clock>
    </div>
  )
}

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)
