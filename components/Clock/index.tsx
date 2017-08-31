import * as React from 'react'

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

interface Iprops {
  light: string
  lastUpdate: number
}

export const Clock: React.StatelessComponent<Iprops> = props => {
  return (
    <div className={props.light ? 'light' : ''}>
      <StyledClock>{format(new Date(props.lastUpdate))}</StyledClock>
    </div>
  )
}

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)
