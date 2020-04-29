/*
 *
 * Input
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import { InputWrapper, TextAreaWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Input:index')

const Input = ({ behavior, onChange, ...restProps }) => {
  const handleOnChange = useCallback(e => onChange && onChange(e), [onChange])

  return behavior === 'default' ? (
    <InputWrapper onChange={handleOnChange} {...restProps} />
  ) : (
    <TextAreaWrapper onChange={handleOnChange} {...restProps} />
  )
}

Input.propTypes = {
  behavior: T.oneOf(['default', 'textarea']),
  placeholder: T.string,
  value: T.string,
  onChange: T.oneOfType([T.func, T.instanceOf(null)]),
}

Input.defaultProps = {
  behavior: 'default',
  placeholder: '',
  value: '',
  onChange: null,
}

export default React.memo(Input)
