/*
 *
 * FormItem
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'

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
  value: PropTypes.string,
  label: PropTypes.string,
  raw: PropTypes.string,
  ratKey: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['input', 'textarea', 'node']),
  node: PropTypes.node,
  att: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  bottom: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
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

export default FormItem
