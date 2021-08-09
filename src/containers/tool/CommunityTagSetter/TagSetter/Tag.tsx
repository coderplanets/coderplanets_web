import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'

import { SpaceGrow } from '@/components/Common'
import Checker from '@/components/Checker'
import IconButton from '@/components/Buttons/IconButton'

import type { TView } from '../spec'
import {
  Wrapper,
  HashTag,
  Name,
  CheckWrapper,
  RemoveIcon,
} from '../styles/tag_setter/tag'

type TProps = {
  tag: TTag
  view: TView
  onUpdate?: (tag: TTag) => void | null
  onSelect?: (tag: TTag) => void | null
  onDelete?: (tag: TTag) => void | null
}

const Tag: FC<TProps> = ({
  tag,
  view,
  onSelect = null,
  onUpdate = null,
  onDelete = null,
}) => {
  const selectable = view === 'select'
  const deleteable = view === 'delete'
  const updateable = view === 'update'

  return (
    <Wrapper key={tag.id}>
      <HashTag color={tag.color} />
      <Name>
        <div>{tag.title}</div>
        <SpaceGrow />

        {selectable && (
          <CheckWrapper>
            <Checker size="small" />
          </CheckWrapper>
        )}

        {deleteable && (
          <Tooltip
            trigger="click"
            content="请确认是否继续？"
            placement="top"
            behavior="delete-confirm"
            onConfirm={() => onDelete?.(tag)}
          >
            <RemoveIcon src={`${ICON}/shape/delete-solid.svg`} />
          </Tooltip>
        )}

        {updateable && (
          <IconButton
            path="edit/publish-pen.svg"
            mLeft={8}
            mRight={5}
            onClick={() => onUpdate?.(tag)}
          />
        )}
      </Name>
    </Wrapper>
  )
}

export default memo(Tag)
