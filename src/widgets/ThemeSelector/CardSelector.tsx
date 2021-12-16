import { FC, memo } from 'react'
import { keys } from 'ramda'

import { ICON_CMD } from '@/config'
import { themeMeta } from '@/utils/themes'

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

type TProps = {
  curTheme?: string
  changeTheme?: (theme: string) => void
}

const CardSelector: FC<TProps> = ({ curTheme, changeTheme }) => (
  <Wrapper>
    {keys(themeMeta).map((name) => (
      <IntroBox key={name} active={curTheme === name}>
        <ThemeDot
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

export default memo(CardSelector)
