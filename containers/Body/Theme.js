import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'timeago-react'

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
  console.log('curTheme', curTheme)
  // console.log('curTheme === name ? ', curTheme === name)

  return (
    <Center>
      <HorizontalCenter>
        <Title>
          <I18n {...lang.themeTitle} />
        </Title>
        <TimeAgo datetime={'2016-08-08 08:08:08'} locale="en" />
      </HorizontalCenter>
      <br />
      <Desc>
        得益于 <A href="https://github.com/MicheleBertoli/css-in-js">
          css-in-js
        </A>{' '}
        的先进理念以及{' '}
        <A href="https://www.styled-components.com/">styled-components</A>{' '}
        的优雅实现, 主题可在几乎不增加项目复杂度的情况下按需求轻松扩展。 内置四套主题如下：
      </Desc>
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
