/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'

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

import { makeDebugger, themeMeta, uid } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThemeSelector:index')
/* eslint-enable no-unused-vars */

const DotStyle = ({ curTheme, changeTheme }) => (
  <FlexWrapper>
    {R.keys(themeMeta).map(name => (
      <ThemeDot
        key={uid.gen()}
        active={curTheme === name}
        name={name}
        onClick={changeTheme.bind(this, name)}
      />
    ))}
  </FlexWrapper>
)

const DetailStyle = ({ curTheme, changeTheme }) => (
  <DetailWrapper>
    {R.keys(themeMeta).map(name => (
      <IntroBox key={uid.gen()} active={curTheme === name}>
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
            {themeMeta[name].desc}
          </ThemeDesc>
          <AuthorInfo>
            <AuthorIcon src={`${ICON_CMD}/author.svg`} />
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
