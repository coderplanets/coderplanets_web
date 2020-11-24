/*
 *
 * Select
 *
 */

import React from 'react'
import T from 'prop-types'
import ReactSelect from 'react-select'

import { buildLog } from '@/utils'

import { Input, Option, IndicatorsContainer } from './components'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Select:index')

const options = [
  { value: 'web', label: 'Web', desc: '网站，浏览器扩展等' },
  { value: 'ios', label: 'iOS', desc: 'App, 平板应用等' },
  { value: 'android', label: 'Android', desc: 'App, 平板应用等' },
  { value: 'mac', label: 'Mac' },
  { value: 'windows', label: 'Windows' },
  { value: 'cmd', label: '命令行', desc: '终端工具，unix / powershell 等' },
  { value: 'miniprogram', label: '小程序', desc: '微信小程序，头条小程序等' },
  { value: 'other', label: '其他' },
]

const Select = ({ testId, placeholder }) => {
  const styles = {
    container: (base) => ({
      ...base,
      outline: 'none',
      '&:hover': {
        borderColor: '#024759',
      },
      '&:focus': {
        borderColor: '#024759',
      },
    }),
    // 容器 -- not work
    control: (base, state) => ({
      ...base,
      background: '#052630',
      borderColor: '#043443',
      // 可以消除 outLine
      boxShadow: state.isFocused ? '0 0 0 1px #00627A' : 'none',
      '&:hover': {
        borderColor: '#00627A',
      },
      '&:focus': {
        borderColor: '#00627A',
      },
    }),
    indicatorContainer: (base) => ({
      ...base,
      background: '#00262F',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      alignSelf: 'none',
      height: '12px',
      marginLeft: '-1px',
      background: '#405356',
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: '13px',
      color: '#5F7477',
      marginLeft: 5,
      opacity: 0.8,
    }),
    // 输入框
    valueContainer: (base) => ({
      ...base,
      background: '#052630',
      color: 'white',
      width: '100%',
    }),
    // 单值
    singleValue: (base) => ({
      ...base,
      color: '#798F90',
      background: '#00343E',
      padding: '0 5px',
      borderRadius: '3px',
      maxWidth: '80px',
    }),
    multiValue: (base) => ({
      ...base,
      color: '#798F90',
      background: '#00343E',
      borderRadius: '3px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#798F90',
    }),
    menu: (base) => ({
      ...base,
      background: '#00262F',
    }),
    menuList: (base) => ({
      ...base,
      border: '2px solid',
      borderColor: '#043443',
    }),
    clearIndicator: (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: state.isFocused ? '#6C8385' : '#597073',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      cursor: 'pointer',
      color: state.isFocused ? '#6C8385' : '#597073',
    }),
    option: (base) => ({
      ...base,
      height: '100%',
      background: '#00262F',

      '&:hover': {
        background: '#043443',
        cursor: 'pointer',
      },
      transition: 'background 0.1s',
    }),
  }

  return (
    <Wrapper testId={testId}>
      <ReactSelect
        options={options}
        placeholder={placeholder}
        styles={styles}
        components={{ IndicatorsContainer, Option, Input }}
        closeMenuOnSelect={false}
        isMulti
        isClearable
      />
    </Wrapper>
  )
}

Select.propTypes = {
  testId: T.string,
  placeholder: T.string,
}

Select.defaultProps = {
  testId: 'select',
  placeholder: '请选择运行平台',
}

export default React.memo(Select)
