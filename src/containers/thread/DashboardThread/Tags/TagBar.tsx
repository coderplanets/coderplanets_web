import { FC, memo } from 'react'

import type { TTag } from '@/spec'
import { COLORS } from '@/constant'

import { SETTING_FIELD } from '../constant'
import { Space, SpaceGrow } from '@/widgets/Common'
import ColorSelector from '@/widgets/ColorSelector'

import SavingBar from '../SavingBar'

import {
  Wrapper,
  Dot,
  DotSelector,
  Title,
  InputWrapper,
  Inputer,
  Actions,
  EditIcon,
  CloseIcon,
} from '../styles/tags/tag_bar'
import { updateEditingTag } from '../logic'

type TProps = {
  tag: TTag
  editingTag: TTag
}

const TagBar: FC<TProps> = ({ tag, editingTag }) => {
  const editing = editingTag?.id === tag.id

  return (
    <Wrapper key={tag.id} editing={editing}>
      <SavingBar isTouched={editing} field={SETTING_FIELD.TAG}>
        {editing ? (
          <ColorSelector
            activeColor={editingTag.color}
            onChange={(color) => updateEditingTag({ ...editingTag, color })}
            placement="bottom-start"
            offset={[-8, 0]}
          >
            <DotSelector>
              <Dot color={COLORS[editingTag.color]} editing={editing} />
            </DotSelector>
          </ColorSelector>
        ) : (
          <Dot color={COLORS[tag.color]} />
        )}
        {editing ? (
          <InputWrapper>
            <Inputer
              value={editingTag.title}
              onChange={(e) =>
                updateEditingTag({ ...editingTag, title: e.target.value })
              }
              autoFocus
            />
          </InputWrapper>
        ) : (
          <Title>{tag.title}</Title>
        )}
        <SpaceGrow />
        {!editing && (
          <Actions>
            <EditIcon onClick={() => updateEditingTag(tag)} />
            <Space right={4} />
            <CloseIcon />
          </Actions>
        )}
      </SavingBar>
    </Wrapper>
  )
}

export default memo(TagBar)
