import React from 'react'
import R from 'ramda'

import { themeMeta } from '@utils'
import { Wrapper, ThemeDot } from './style/dot_selector'

const DotSelector = ({ curTheme, changeTheme }) => (
  <Wrapper>
    {R.keys(themeMeta).map(name => (
      <ThemeDot
        key={name}
        active={curTheme === name}
        name={name}
        onClick={changeTheme.bind(this, name)}
      />
    ))}
  </Wrapper>
)

export default DotSelector
