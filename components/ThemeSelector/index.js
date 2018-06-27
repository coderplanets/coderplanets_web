/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import { FlexWrapper, ThemeDot } from './style'
import { makeDebugger, themeKeys } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThemeSelector:index')
/* eslint-enable no-unused-vars */

const ThemeSelector = ({ curTheme, changeTheme }) => (
  <FlexWrapper>
    {themeKeys.map(name => (
      <ThemeDot
        key={shortid.generate()}
        active={curTheme === name}
        name={name}
        onClick={changeTheme.bind(this, name)}
      />
    ))}
  </FlexWrapper>
)

ThemeSelector.propTypes = {
  curTheme: PropTypes.string,
  changeTheme: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

ThemeSelector.defaultProps = {
  curTheme: '',
}

export default ThemeSelector
