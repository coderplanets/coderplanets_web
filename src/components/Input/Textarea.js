/*
 *
 * Input
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import { pickBy } from 'ramda'

import { buildLog } from '@/utils'

import { Wrapper } from './styles/textarea'

/* eslint-disable-next-line */
const log = buildLog('c:Input:index')

const Textarea = ({ onChange, testId, ...restProps }) => {
  const handleOnChange = useCallback((e) => onChange && onChange(e), [onChange])
  const validProps = pickBy((v) => v !== null, restProps)

  return (
    <Wrapper
      testId={testId}
      onChange={handleOnChange}
      minRows={1}
      spellcheck="false"
      {...validProps}
    />
  )
}

Textarea.propTypes = {
  placeholder: T.string,
  value: T.oneOfType([T.string, T.instanceOf(null)]),
  onChange: T.oneOfType([T.func, T.instanceOf(null)]),
  disabled: T.bool,
  autoFocus: T.bool,
  testId: T.string,
}

Textarea.defaultProps = {
  placeholder: '',
  value: null,
  onChange: null,
  disabled: false,
  autoFocus: false,
  testId: 'input',
}

export default React.memo(Textarea)
