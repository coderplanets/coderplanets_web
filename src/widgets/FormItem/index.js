/*
 *
 * FormItem
 *
 */

import React from 'react'
import T from 'prop-types'
import { isEmpty } from 'ramda'

import { buildLog } from '@/utils/logger'
import { hasValue } from '@/utils/validator'
import { SIZE } from '@/constant'
import Maybe from '@/widgets/Maybe'

import {
  FormItemWrapper,
  FormLabel,
  FormInput,
  NodeWrapper,
  Inputer,
  TextAreaInput,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:FormItem:index')

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
          <TextAreaInput
            value={value}
            error={String(error)}
            placeholder={placeholder}
            autosize={{ minRows: 3, maxRows: 6 }}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            behavior="textarea"
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
          <Maybe test={!isEmpty(att)}>{att}</Maybe>
        </FormInput>
      )
  }
}

const FormItem = ({
  className,
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
  <FormItemWrapper className={className} bottom={bottom}>
    <Maybe test={!isEmpty(label)}>
      <FormLabel error={hasValue(raw) && raw === ratKey}>{label}</FormLabel>
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
  className: T.string,
  value: T.string,
  label: T.string,
  raw: T.string,
  ratKey: T.string,
  placeholder: T.string,
  onChange: T.func,
  type: T.oneOf(['input', 'textarea', 'node']),
  node: T.node,
  att: T.oneOfType([T.string, T.node]),
  size: T.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  bottom: T.number,
  disabled: T.bool,
  autoFocus: T.bool,
}

FormItem.defaultProps = {
  className: 'normal-form',
  value: '',
  label: '',
  raw: '',
  ratKey: '',
  size: SIZE.MEDIUM,
  placeholder: '',
  type: 'input',
  node: <div />,
  att: '',
  onChange: log,
  bottom: 25,
  disabled: false,
  autoFocus: false,
}

export default React.memo(FormItem)
