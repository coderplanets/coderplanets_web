import React from 'react'
import T from 'prop-types'

import { buildLog, prettyNum } from '@utils'

import {
  Wrapper,
  NumberItem,
  LargeNumberItem,
  SubNumberWrapper,
  GreenDot,
  PlusSign,
} from './styles/number_group'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:NumberGroup')

const NumberGroup = ({ readOnly, count, subCount, onClick, subPrefix }) => {
  return (
    <Wrapper>
      {subCount ? (
        <NumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </NumberItem>
      ) : (
        <LargeNumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </LargeNumberItem>
      )}

      {subCount && (
        <SubNumberWrapper>
          {subPrefix === 'online' && <GreenDot />}
          {subPrefix === 'add' && <PlusSign>+</PlusSign>}
          {subCount}
        </SubNumberWrapper>
      )}
    </Wrapper>
  )
}

NumberGroup.propTypes = {
  readOnly: T.bool,
  onClick: T.func,
  count: T.number,
  subCount: T.oneOfType([T.number, T.instanceOf(null)]),
  subPrefix: T.oneOfType([T.string, T.instanceOf(null)]), // oneof 'online' / 'add'
}

NumberGroup.defaultProps = {
  readOnly: false,
  onClick: log,
  count: 0,
  subCount: null,
  subPrefix: null,
}

export default React.memo(NumberGroup)
