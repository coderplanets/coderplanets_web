/*
 *
 * FormItem
 *
 */

import React from 'react'
import R from 'ramda'
import T from 'prop-types'

import { buildLog, hasValue } from '@utils'
import Maybe from '@components/Maybe'

import {
  FormItemWrapper,
  FormLable,
  FormInput,
  NodeWrapper,
  Inputer,
  TextAreaer,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:FormItem:index')

const FormContent = ({
  type,
  value,
  onChange,
  error,
  size,
  placeholder,
  node,
  att,
  disabled,
  autoFocus,
}) => {
  switch (type) {
    case 'node':
      return <NodeWrapper>{node}</NodeWrapper>

    case 'textarea':
      return (
        <FormInput>
          <TextAreaer
            value={value}
            error={String(error)}
            placeholder={placeholder}
            autosize={{ minRows: 3, maxRows: 6 }}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
          />
        </FormInput>
      )

    default:
      return (
        <FormInput>
          <Inputer
            size={size}
            error={String(error)}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
          />
          <Maybe test={!R.isEmpty(att)}>{att}</Maybe>
        </FormInput>
      )
  }
}

const FormItem = ({
  type,
  label,
  raw,
  ratKey,
  value,
  onChange,
  size,
  placeholder,
  node,
  att,
  bottom,
  disabled,
  autoFocus,
}) => (
  <FormItemWrapper className="normal-form" bottom={bottom}>
    <Maybe test={!R.isEmpty(label)}>
      <FormLable error={hasValue(raw) && raw === ratKey}>{label}</FormLable>
    </Maybe>

    <FormContent
      type={type}
      value={value}
      error={hasValue(raw) && raw === ratKey}
      size={size}
      onChange={onChange}
      placeholder={placeholder}
      node={node}
      att={att}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  </FormItemWrapper>
)

FormItem.propTypes = {
  value: T.string,
  label: T.string,
  raw: T.string,
  ratKey: T.string,
  placeholder: T.string,
  onChange: T.func,
  type: T.oneOf(['input', 'textarea', 'node']),
  node: T.node,
  att: T.oneOfType([T.string, T.node]),
  size: T.oneOf(['small', 'default', 'large']),
  bottom: T.string,
  disabled: T.bool,
  autoFocus: T.bool,
}

FormItem.defaultProps = {
  value: '',
  label: '',
  raw: '',
  ratKey: '',
  size: 'default',
  placeholder: '',
  type: 'input',
  node: <div />,
  att: '',
  onChange: log,
  bottom: '25px',
  disabled: false,
  autoFocus: false,
}

export default React.memo(FormItem)
