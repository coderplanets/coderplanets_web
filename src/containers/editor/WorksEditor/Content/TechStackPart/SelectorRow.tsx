import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import {
  Wrapper,
  Block,
  Logo,
  Title,
  AddBlock,
  AddButton,
  DeleteHint,
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
          <Logo src={t.logo} raw={t.raw} />
          <Title>{t.title}</Title>
          <DeleteHint>删除</DeleteHint>
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
