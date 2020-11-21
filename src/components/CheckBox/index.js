/*
 *
 * CheckBox
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, CheckedIcon, Box, UnCheckedBox, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CheckBox:index')

const CheckBox = ({ testId, checked, onChange, children }) => {
  return (
    <Wrapper testId={testId} onClick={() => onChange(!checked)}>
      {checked ? (
        <Box>
          <CheckedIcon src={`${ICON}/shape/checkbox-checked.svg`} />
        </Box>
      ) : (
        <UnCheckedBox />
      )}
      <Title checked={checked}>{children}</Title>
    </Wrapper>
  )
}

CheckBox.propTypes = {
  testId: T.string,
  children: T.oneOfType([T.string, T.node]),
  checked: T.bool,
  onChange: T.func,
}

CheckBox.defaultProps = {
  testId: 'check-box',
  children: '',
  checked: false,
  onChange: log,
}

export default React.memo(CheckBox)
