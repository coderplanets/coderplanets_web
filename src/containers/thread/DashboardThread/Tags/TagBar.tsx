import { FC, memo } from 'react'

import type { TTag } from '@/spec'

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

type TProps = {
  tag: TTag
}

const TagBar: FC<TProps> = ({ tag }) => {
  const editing = tag.id === '2'

  return (
    <Wrapper key={tag.id} editing={editing}>
      <SavingBar isTouched={editing} field={SETTING_FIELD.TAG}>
        {editing ? (
          <ColorSelector
            activeColor={tag.color}
            // onChange={(color) => edit(color, 'primaryColor')}
            placement="bottom-start"
            offset={[-8, 0]}
          >
            <DotSelector>
              <Dot color={tag.color} editing={editing} />
            </DotSelector>
          </ColorSelector>
        ) : (
          <Dot color={tag.color} />
        )}
        {editing ? (
          <InputWrapper>
            <Inputer value={tag.title} />
          </InputWrapper>
        ) : (
          <Title>{tag.title}</Title>
        )}
        <SpaceGrow />
        {!editing && (
          <Actions>
            <EditIcon />
            <Space right={4} />
            <CloseIcon />
          </Actions>
        )}
      </SavingBar>
    </Wrapper>
  )
}

export default memo(TagBar)
