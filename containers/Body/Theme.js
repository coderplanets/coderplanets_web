import React from 'react'
import styled from 'styled-components'
// import TimeAgo from 'timeago-react'

import { FormattedMessage as I18n } from 'react-intl'
import lang from './lang'

import * as logic from './logic'
import { ThemeSelectorWraper, ThemeSelector } from './ThemeSelector'
import A from '../../components/A'
import { Center, HorizontalCenter, Title } from '../../components/BaseStyled'
import { themeNames } from '../../utils/themes'

const Desc = styled.div`
  color: ${props => props.theme.font};
  font-size: 2vh;
  transition: color 0.3s;
`

const Theme = ({ curTheme }) => {
  return (
    <Center>
      <HorizontalCenter>
        <Title>
          <I18n {...lang.themeTitle} />
        </Title>
      </HorizontalCenter>
      <br />
      <Desc>
        <I18n {...lang.themeDesc} />
        <A href="https://www.styled-components.com/">styled-components</A>
      </Desc>
      <br />
      <br />
      <ThemeSelectorWraper>
        {themeNames.map(name => (
          <ThemeSelector
            key={name}
            active={curTheme === name}
            type={name}
            onClick={logic.changeTheme.bind(this, name)}
          />
        ))}
      </ThemeSelectorWraper>
    </Center>
  )
}

export default Theme
