/*
 *
 * Input
 *
 */

import { FC, useCallback, memo } from 'react'
import { pickBy } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'

import Textarea from './Textarea'
import {
  Wrapper,
  PrefixWrapper,
  SuffixWrapper,
  Icon,
  InputWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Input:index')

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
}

const Input: FC<TProps> = ({
  behavior = 'default',
  onChange = null,
  onFocus = null,
  prefixIcon = null,
  prefixActive = false,
  suffixIcon = null,
  suffixActive = false,
  testid = 'input',
  ...restProps
}) => {
  const handleOnChange = useCallback((e) => onChange && onChange(e), [onChange])
  const handleOnFocus = useCallback((e) => onFocus && onFocus(e), [onFocus])
  const validProps = pickBy((v) => v !== null, restProps)

  return behavior === 'default' ? (
    <Wrapper testid={testid}>
      <PrefixWrapper show={!nilOrEmpty(prefixIcon)}>
        {prefixIcon && <Icon src={prefixIcon} active={prefixActive} />}
      </PrefixWrapper>
      <InputWrapper
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        spellcheck="false"
        // prefix={false}
        hasPrefix={!nilOrEmpty(prefixIcon)}
        hasSuffix={!nilOrEmpty(suffixIcon)}
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
