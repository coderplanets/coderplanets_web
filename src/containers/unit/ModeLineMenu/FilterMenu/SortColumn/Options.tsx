import { FC, memo } from 'react'

import { ICON } from '@/config'
import {
  Wrapper,
  Title,
  SelectIcon,
  UnSelectDot,
} from '../../styles/filter_menu/sort_column/options'

const Options: FC = () => {
  const active = true

  return (
    <Wrapper>
      <Title>
        <span>全部</span>
        {active ? (
          <SelectIcon src={`${ICON}/radio-checked.svg`} />
        ) : (
          <UnSelectDot />
        )}
      </Title>
      <Title>
        <span>最多浏览</span>
        <UnSelectDot />
      </Title>
      <Title>
        <span>最多讨论</span>
        <UnSelectDot />
      </Title>
      <Title>
        <span>最多收藏</span>
        <UnSelectDot />
      </Title>
    </Wrapper>
  )
}

export default memo(Options)
