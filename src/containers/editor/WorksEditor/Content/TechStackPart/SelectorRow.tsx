import { FC, memo } from 'react'
import { ICON_BASE } from '@/config'

import type { TCommunity } from '@/spec'
import {
  Wrapper,
  Block,
  Logo,
  Title,
  AddBlock,
  AddButton,
} from '../../styles/content/tech_stack_part/selector_row'

type TProps = {
  techs?: TCommunity[]
  // langs: string[]
  onAdd: () => void
}

const SelectorRow: FC<TProps> = ({ onAdd, techs = [] }) => {
  return (
    <Wrapper>
      {techs.map((t) => (
        <Block key={t.raw}>
          <Logo src={t.logo} />
          <Title>{t.title}</Title>
        </Block>
      ))}
      <AddBlock onClick={() => onAdd()}>
        <AddButton>+</AddButton>
        <Title>添加</Title>
      </AddBlock>
    </Wrapper>
  )
}

export default memo(SelectorRow)
