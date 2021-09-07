import { FC, memo } from 'react'

import {
  Wrapper,
  Item,
  Label,
  Value,
} from '../../styles/right_sticker/works_sticker/others'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const Others: FC = () => {
  return (
    <Wrapper>
      <Item>
        <Label>盈利模式:</Label>
        <Value>内购</Value>
      </Item>
      <Item>
        <Label>工作状态:</Label>
        <Value>全职</Value>
      </Item>
      <Item>
        <Label>所在城市:</Label>
        <Value>成都</Value>
      </Item>
    </Wrapper>
  )
}

export default memo(Others)
