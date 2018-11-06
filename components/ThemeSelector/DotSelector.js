import React from 'react'
import R from 'ramda'

import { Wrapper, ThemeDot } from './style/dot_selector'

import { themeMeta, uid } from '../../utils'

const DotSelector = ({ curTheme, changeTheme }) => (
  <Wrapper>
    {R.keys(themeMeta).map(name => (
      <ThemeDot
        key={uid.gen()}
        active={curTheme === name}
        name={name}
        onClick={changeTheme.bind(this, name)}
      />
    ))}
  </Wrapper>
)

export default DotSelector
