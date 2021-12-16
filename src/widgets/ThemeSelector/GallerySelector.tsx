import { FC, memo } from 'react'
import { keys } from 'ramda'

import { themeMeta } from '@/utils/themes'

import {
  Wrapper,
  ThemeDot,
  IntroBox,
  IntroDesc,
  ThemeTitle,
  ThemeDesc,
} from './styles/gallery_selector'

type TProps = {
  curTheme?: string
  changeTheme?: (theme: string) => void
}

const GallerySelector: FC<TProps> = ({ curTheme, changeTheme }) => {
  return (
    <Wrapper>
      {keys(themeMeta).map((name, index) => (
        <IntroBox key={name} active={curTheme === name} index={index}>
          <IntroDesc>
            <ThemeTitle
              active={curTheme === name}
              onClick={() => changeTheme(name)}
            >
              {name}
            </ThemeTitle>
            <ThemeDesc
              active={curTheme === name}
              onClick={() => changeTheme(name)}
            >
              {themeMeta[name].desc}
            </ThemeDesc>
          </IntroDesc>
          <ThemeDot
            active={curTheme === name}
            name={name}
            onClick={() => changeTheme(name)}
          />
        </IntroBox>
      ))}
    </Wrapper>
  )
}

export default memo(GallerySelector)
