/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'

import {
  FlexWrapper,
  ThemeDot,
  DetailWrapper,
  IntroBox,
  IntroDesc,
  ThemeTitle,
  ThemeDesc,
  AuthorInfo,
  AuthorIcon,
  AuthorName,
} from './style'
import { makeDebugger, themeKeys, themeDescs } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThemeSelector:index')
/* eslint-enable no-unused-vars */

const DotStyle = ({ curTheme, changeTheme }) => (
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

const DetailStyle = ({ curTheme, changeTheme }) => (
  <DetailWrapper>
    {themeKeys.map(name => (
      <IntroBox key={shortid.generate()} active={curTheme === name}>
        <ThemeDot
          large
          active={curTheme === name}
          name={name}
          onClick={changeTheme.bind(this, name)}
        />
        <IntroDesc>
          <ThemeTitle
            active={curTheme === name}
            onClick={changeTheme.bind(this, name)}
          >
            {name}
          </ThemeTitle>
          <ThemeDesc onClick={changeTheme.bind(this, name)}>
            {themeDescs[name]}
          </ThemeDesc>
          <AuthorInfo>
            <AuthorIcon src={`${ICON_ASSETS}/cmd/author.svg`} />
            <AuthorName
              href="https://www.github.com/mydearxym"
              rel="noopener noreferrer"
              target="_blank"
            >
              mydearxym
            </AuthorName>
          </AuthorInfo>
        </IntroDesc>
      </IntroBox>
    ))}
  </DetailWrapper>
)

const ThemeSelector = ({ displayStyle, curTheme, changeTheme }) => {
  return displayStyle === 'default' ? (
    <DotStyle curTheme={curTheme} changeTheme={changeTheme} />
  ) : (
    <DetailStyle curTheme={curTheme} changeTheme={changeTheme} />
  )
}

ThemeSelector.propTypes = {
  curTheme: PropTypes.string,
  displayStyle: PropTypes.oneOf(['default', 'detail']),
  changeTheme: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

ThemeSelector.defaultProps = {
  curTheme: '',
  displayStyle: 'default',
}

export default ThemeSelector
