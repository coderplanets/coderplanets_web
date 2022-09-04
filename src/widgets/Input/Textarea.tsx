/*
 *
 * Input
 *
 */

import { FC, useCallback, memo } from 'react'
import { pickBy } from 'ramda'

import { buildLog } from '@/utils/logger'

import { Wrapper } from './styles/textarea'

/* eslint-disable-next-line */
const log = buildLog('w:Input:index')

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
      spellCheck="false"
      // @ts-ignore
      {...validProps}
    />
  )
}

export default memo(Textarea)
