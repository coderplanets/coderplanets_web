import React from 'react'
import { keys } from 'ramda'

import { themeMeta } from '@/utils'

import {
  Wrapper,
  ThemeDot,
  IntroBox,
  IntroDesc,
  ThemeTitle,
  ThemeDesc,
} from './style/gallery_selector'

const GallerySelector = ({ curTheme, changeTheme }) => {
  return (
    <Wrapper>
      {keys(themeMeta).map((name) => (
        <IntroBox key={name} active={curTheme === name}>
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
            large
            active={curTheme === name}
            name={name}
            onClick={() => changeTheme(name)}
          />
        </IntroBox>
      ))}
    </Wrapper>
  )
}

export default React.memo(GallerySelector)
