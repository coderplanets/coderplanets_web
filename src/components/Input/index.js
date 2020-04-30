/*
 *
 * Input
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty } from '@utils'

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
  ...restProps
}) => {
  const handleOnChange = useCallback(e => onChange && onChange(e), [onChange])
  const validProps = R.pickBy(v => v !== null, restProps)

  return behavior === 'default' ? (
    <Wrapper>
      <PrefixWrapper show={!nilOrEmpty(prefixIcon)}>
        <Icon src={prefixIcon} active={prefixActive} />
      </PrefixWrapper>
      <InputWrapper
        onChange={handleOnChange}
        prefix={!nilOrEmpty(prefixIcon)}
        suffix={!nilOrEmpty(suffixIcon)}
        {...validProps}
      />
      <SuffixWrapper show={!nilOrEmpty(suffixIcon)}>
        <Icon src={suffixIcon} active={suffixActive} />
      </SuffixWrapper>
    </Wrapper>
  ) : (
    <TextAreaWrapper onChange={handleOnChange} {...validProps} />
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
}

export default React.memo(Input)
