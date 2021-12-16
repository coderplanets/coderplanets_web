import { FC, memo } from 'react'
import { keys } from 'ramda'

import { themeMeta } from '@/utils/themes'
import { Wrapper, ThemeDot } from './styles/dot_selector'

type TProps = {
  curTheme?: string
  changeTheme?: (theme: string) => void
}

const DotSelector: FC<TProps> = ({ curTheme, changeTheme }) => (
  <Wrapper>
    {keys(themeMeta).map((name) => (
      <ThemeDot
        key={name}
        active={curTheme === name}
        name={name}
        onClick={() => changeTheme(name)}
      />
    ))}
  </Wrapper>
)

export default memo(DotSelector)
