import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'
import IconButton from '@/components/Buttons/IconButton'

import type { TTagView } from '../spec'
import { TAG_VIEW } from '../constant'
import {
  Wrapper,
  HashTag,
  Name,
  CheckWrapper,
  RemoveIcon,
} from '../styles/tag_setter/tag'
import { changeTagView } from '../logic'

type TProps = {
  tag: TTag
  view: TTagView
  checked: boolean
  onTagSelect: (tag: TTag, select: boolean) => void
}

const Tag: FC<TProps> = ({ tag, view, checked, onTagSelect }) => {
  const selectable = view === TAG_VIEW.SELECT
  const deleteable = view === TAG_VIEW.DELETE
  const updateable = view === TAG_VIEW.UPDATE

  return (
    <Wrapper key={tag.id}>
      <HashTag color={tag.color} />
      <Name>
        <div>{tag.title}</div>
        <SpaceGrow />

        {selectable && (
          <CheckWrapper>
            <Checker
              size="small"
              checked={checked}
              onChange={(checked) => onTagSelect(tag, checked)}
            />
          </CheckWrapper>
        )}

        {deleteable && (
          <Tooltip
            trigger="click"
            content="请确认是否继续？"
            placement="top"
            behavior="delete-confirm"
            onConfirm={console.log}
          >
            <RemoveIcon src={`${ICON}/shape/delete-solid.svg`} />
          </Tooltip>
        )}

        {updateable && (
          <IconButton
            path="edit/publish-pen.svg"
            mLeft={8}
            mRight={5}
            onClick={() => {
              changeTagView(TAG_VIEW.UPDATE_ITEM)
            }}
          />
        )}
      </Name>
    </Wrapper>
  )
}

export default memo(Tag)
