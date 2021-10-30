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
} from './styles/row'

type TProps = {
  items: TCommunity[]
  onAdd: () => void
  onRemove: (t: TCommunity) => void
}

const ActiveRow: FC<TProps> = ({ onAdd, onRemove, items }) => {
  return (
    <Wrapper>
      {items?.map((t) => (
        <Block key={t.raw}>
          <Logo src={t.logo} raw={t.raw} />
          <Title>{t.title}</Title>
          <DeleteHint onClick={() => onRemove(t)}>删除</DeleteHint>
        </Block>
      ))}
      <AddBlock onClick={() => onAdd()}>
        <AddButton>+</AddButton>
        <Title>添加</Title>
      </AddBlock>
    </Wrapper>
  )
}

export default memo(ActiveRow)
