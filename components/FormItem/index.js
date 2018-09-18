/*
 *
 * FormItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Input } from 'antd'
import { FormItemWrapper, FormLable, FormInput, NodeWrapper } from './styles'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:FormItem:index')
/* eslint-enable no-unused-vars */

const { TextArea } = Input

const FormContent = ({ type, value, onChange, placeholder, node }) => {
  switch (type) {
    case 'node': {
      return <NodeWrapper>{node}</NodeWrapper>
    }
    case 'textarea': {
      return (
        <FormInput>
          <TextArea
            value={value}
            placeholder={placeholder}
            autosize={{ minRows: 3, maxRows: 6 }}
            onChange={onChange}
          />
        </FormInput>
      )
    }
    default: {
      return (
        <FormInput>
          <Input
            size="default"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </FormInput>
      )
    }
  }
}

const FormItem = ({ type, label, value, onChange, placeholder, node }) => (
  <FormItemWrapper className="normal-form">
    <FormLable>{label}</FormLable>

    <FormContent
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      node={node}
    />
  </FormItemWrapper>
)

FormItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['input', 'textarea', 'node']),
  node: PropTypes.node,
  /* size: PropTypes.oneOf(['small', 'medium', 'large']), */
}

FormItem.defaultProps = {
  label: 'label',
  /* size: 'small', */
  placeholder: '',
  type: 'input',
  node: <div />,
}

export default FormItem
