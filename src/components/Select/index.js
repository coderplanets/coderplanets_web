/*
 * this is a wrapper for [react-select](https://react-select.com/)
 * see detail props in https://react-select.com/props
 * Select
 *
 */

import React from 'react'
import T from 'prop-types'
import { useTheme } from 'styled-components'
import ReactSelect from 'react-select'

import { buildLog } from '@/utils/logger'

import { Input, Option, IndicatorsContainer } from './components'

import { Wrapper, getSelectStyles } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Select:index')

const Select = ({
  testid,
  placeholder,
  options,
  isMulti,
  isClearable,
  closeMenuOnSelect,
  onChange,
}) => {
  const theme = useTheme()
  const styles = getSelectStyles(theme)

  return (
    <Wrapper testid={testid}>
      <ReactSelect
        options={options}
        placeholder={placeholder}
        styles={styles}
        components={{ IndicatorsContainer, Option, Input }}
        onChange={onChange}
        closeMenuOnSelect={closeMenuOnSelect}
        isMulti={isMulti}
        isClearable={isClearable}
      />
    </Wrapper>
  )
}

Select.propTypes = {
  testid: T.string,
  placeholder: T.string,
  options: T.arrayOf(
    T.shape({
      value: T.string,
      label: T.string,
      desc: T.string,
    }),
  ).isRequired,
  onChange: T.func,
  isMulti: T.bool,
  closeMenuOnSelect: T.bool,
  isClearable: T.bool,
}

Select.defaultProps = {
  testid: 'select',
  placeholder: '请选择运行平台',
  onChange: log,
  isMulti: false,
  closeMenuOnSelect: true,
  isClearable: true,
}

export default React.memo(Select)
