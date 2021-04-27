/*
 *
 * Input
 *
 */

import React, { FC, useCallback } from 'react'
import { pickBy } from 'ramda'

import { buildLog } from '@/utils'

import { Wrapper } from './styles/textarea'

/* eslint-disable-next-line */
const log = buildLog('c:Input:index')

type TProps = {
  testid?: string
  placeholder?: string
  value?: string | null
  onChange?: (e) => void | null
}

const Textarea: FC<TProps> = ({
  onChange = null,
  testid = 'textarea',
  ...restProps
}) => {
  const handleOnChange = useCallback((e) => onChange?.(e), [onChange])
  const validProps = pickBy((v) => v !== null, restProps)

  return (
    <Wrapper
      testid={testid}
      onChange={handleOnChange}
      minRows={1}
      spellcheck="false"
      {...validProps}
    />
  )
}

export default React.memo(Textarea)
