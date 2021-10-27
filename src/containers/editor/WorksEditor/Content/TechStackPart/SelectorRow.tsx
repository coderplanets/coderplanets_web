import { FC, memo } from 'react'
import { ICON_BASE } from '@/config'

import { selectCommunity } from '@/utils/helper'
import {
  Wrapper,
  Block,
  Logo,
  Title,
  AddBlock,
  AddButton,
} from '../../styles/content/tech_stack_part/selector_row'

type TProps = {
  langs: string[]
}

/* <Block>
        <Logo src={`${ICON_BASE}/pl/javascript.png`} />
        <Title>JavaScript</Title>
      </Block> */

const SelectorRow: FC = () => {
  return (
    <Wrapper>
      <AddBlock onClick={() => selectCommunity()}>
        <AddButton>+</AddButton>
        <Title>添加</Title>
      </AddBlock>
    </Wrapper>
  )
}

export default memo(SelectorRow)
