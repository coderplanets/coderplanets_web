import React from 'react'
import { keys } from 'ramda'

import { ICON_CMD } from '@/config'
import { themeMeta } from '@/utils'

import {
  Wrapper,
  ThemeDot,
  IntroBox,
  IntroDesc,
  ThemeTitle,
  ThemeDesc,
  AuthorInfo,
  AuthorIcon,
  AuthorName,
} from './styles/card_selector'

const CardSelector = ({ curTheme, changeTheme }) => (
  <Wrapper>
    {keys(themeMeta).map((name) => (
      <IntroBox key={name} active={curTheme === name}>
        <ThemeDot
          large
          active={curTheme === name}
          name={name}
          onClick={() => changeTheme(name)}
        />
        <IntroDesc>
          <ThemeTitle
            active={curTheme === name}
            onClick={() => changeTheme(name)}
          >
            {name}
          </ThemeTitle>
          <ThemeDesc onClick={() => changeTheme(name)}>
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
  </Wrapper>
)

export default React.memo(CardSelector)
