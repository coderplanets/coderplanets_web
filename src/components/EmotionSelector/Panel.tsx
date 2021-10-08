import { FC, memo } from 'react'
import { values } from 'ramda'

import type { TEmotion, TEmotionType } from '@/spec'

import { EMOTION } from '@/constant'
import { ICON } from '@/config'

import { isViewerEmotioned } from './helper'
import { Wrapper, Item, EIcon, Name } from './styles/panel'

const Trans = {
  downvote: '踩',
  beer: '啤酒',
  heart: '感谢',
  confused: '狗头',
  popcorn: '吃瓜',
  pill: '药丸',
}

type TProps = {
  emotions: TEmotion[]
  onAction?: (name: TEmotionType, hasEmotioned: boolean) => void
}

const EmojiPanel: FC<TProps> = ({ emotions, onAction }) => {
  return (
    <Wrapper>
      {values(EMOTION).map((name) => {
        const viewerHasEmotioned = isViewerEmotioned(emotions, name)

        return (
          <Item
            key={name}
            name={name}
            onClick={() => onAction(name, viewerHasEmotioned)}
          >
            <EIcon
              src={`${ICON}/emotion/${name}.png`}
              name={name}
              $active={viewerHasEmotioned}
              noLazy
            />
            <Name $active={viewerHasEmotioned}>{Trans[name]}</Name>
          </Item>
        )
      })}
    </Wrapper>
  )
}

export default memo(EmojiPanel)
