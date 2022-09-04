/*
 *
 * Input
 *
 */

import { FC, useCallback, memo } from 'react'
import { pickBy } from 'ramda'

import { nilOrEmpty } from '@/utils/validator'
import { buildLog } from '@/utils/logger'

import Textarea from './Textarea'
import {
  Wrapper,
  PrefixWrapper,
  SuffixWrapper,
  Icon,
  InputWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Input:index')

type TProps = {
  testid?: string
  behavior?: 'default' | 'textarea'
  placeholder?: string
  value?: string | null
  prefixIcon?: string | null
  prefixActive?: boolean
  suffixIcon?: string | null
  suffixActive?: boolean
  disabled?: boolean
  autoFocus?: boolean

  onFocus?: (e) => void | null
  onChange?: (e) => void | null
  onEnter?: () => void | null
}

const Input: FC<TProps> = ({
  behavior = 'default',
  onChange = null,
  onEnter = null,
  onFocus = null,
  prefixIcon = null,
  prefixActive = false,
  suffixIcon = null,
  suffixActive = false,
  testid = 'input',
  autoFocus = false,
  ...restProps
}) => {
  const handleOnChange = useCallback((e) => onChange && onChange(e), [onChange])
  const handleOnKeydown = useCallback(
    (e) => {
      if (e.key === 'Enter' && onEnter) {
        onEnter()
      }
    },
    [onEnter],
  )

  const handleOnFocus = useCallback((e) => onFocus && onFocus(e), [onFocus])
  const validProps = pickBy((v) => v !== null, restProps)

  return behavior === 'default' ? (
    <Wrapper testid={testid}>
      <PrefixWrapper show={!nilOrEmpty(prefixIcon)}>
        {prefixIcon && <Icon src={prefixIcon} active={prefixActive} />}
      </PrefixWrapper>
      <InputWrapper
        onChange={handleOnChange}
        onKeyDown={handleOnKeydown}
        onFocus={handleOnFocus}
        spellCheck="false"
        // prefix={false}
        hasPrefix={!nilOrEmpty(prefixIcon)}
        hasSuffix={!nilOrEmpty(suffixIcon)}
        autoFocus={autoFocus}
        // @ts-ignore
        {...validProps}
      />
      <SuffixWrapper show={!nilOrEmpty(suffixIcon)}>
        {suffixIcon && <Icon src={suffixIcon} active={suffixActive} />}
      </SuffixWrapper>
    </Wrapper>
  ) : (
    <Textarea testid={testid} onChange={onChange} {...restProps} />
  )
}

export default memo(Input)
