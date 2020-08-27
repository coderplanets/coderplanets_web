/*
 *
 * Input
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import { pickBy } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'

import {
  Wrapper,
  PrefixWrapper,
  SuffixWrapper,
  Icon,
  InputWrapper,
  TextAreaWrapper,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Input:index')

const Input = ({
  behavior,
  onChange,
  prefixIcon,
  prefixActive,
  suffixIcon,
  suffixActive,
  testid,
  ...restProps
}) => {
  const handleOnChange = useCallback((e) => onChange && onChange(e), [onChange])
  const validProps = pickBy((v) => v !== null, restProps)

  return behavior === 'default' ? (
    <Wrapper testId={testid}>
      <PrefixWrapper show={!nilOrEmpty(prefixIcon)}>
        {prefixIcon && <Icon src={prefixIcon} active={prefixActive} />}
      </PrefixWrapper>
      <InputWrapper
        onChange={handleOnChange}
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
    <TextAreaWrapper
      testId={testid}
      onChange={handleOnChange}
      {...validProps}
    />
  )
}

Input.propTypes = {
  behavior: T.oneOf(['default', 'textarea']),
  placeholder: T.string,
  value: T.oneOfType([T.string, T.instanceOf(null)]),
  onChange: T.oneOfType([T.func, T.instanceOf(null)]),
  prefixIcon: T.oneOfType([T.string, T.instanceOf(null)]),
  prefixActive: T.bool,
  suffixIcon: T.oneOfType([T.string, T.instanceOf(null)]),
  suffixActive: T.bool,
  disabled: T.bool,
  autoFocus: T.bool,
  testid: T.string,
}

Input.defaultProps = {
  behavior: 'default',
  placeholder: '',
  value: null,
  onChange: null,
  prefixIcon: null,
  prefixActive: false,
  suffixIcon: null,
  suffixActive: false,
  disabled: false,
  autoFocus: false,
  testid: 'input',
}

export default React.memo(Input)
