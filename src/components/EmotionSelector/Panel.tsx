import { FC, memo } from 'react'
import { values } from 'ramda'

import { EMOTION } from '@/constant'
import { ICON } from '@/config'
import { Wrapper, Item, EIcon, Name } from './styles/panel'

const Trans = {
  downvote: '踩',
  beer: '啤酒',
  heart: '感谢',
  confused: '狗头',
  popcorn: '吃瓜',
  pill: '药丸',
}

const EmojiPanel: FC = () => {
  return (
    <Wrapper>
      {values(EMOTION).map((item) => (
        <Item key={item} name={item}>
          <EIcon src={`${ICON}/emotion/${item}.png`} name={item} noLazy />
          <Name>{Trans[item]}</Name>
        </Item>
      ))}
    </Wrapper>
  )
}

export default memo(EmojiPanel)
