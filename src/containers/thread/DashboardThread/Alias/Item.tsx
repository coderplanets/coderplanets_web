import { FC, memo, Fragment } from 'react'

import AddButton from '@/widgets/Buttons/AddButton'
import { SpaceGrow } from '@/widgets/Common'

import { SETTING_FIELD } from '../constant'
import Suggestion from './Suggestion'
import SavingBar from '../SavingBar'

import type { TAlias } from '../spec'

import {
  Wrapper,
  Header,
  Title,
  InputWrapper,
  Inputer,
  Footer,
  ArrowWrapper,
  ArrowLine,
  ArrowIcon,
} from '../styles/alias/item'

import { updateEditingAlias, resetEdit } from '../logic'

type TProps = {
  alias: TAlias
  editingAlias: TAlias
}

const Item: FC<TProps> = ({ alias, editingAlias }) => {
  const isEditMode: boolean = alias.raw === editingAlias?.raw
  const isChanged: boolean = alias.original !== alias.name

  return (
    <Wrapper>
      <Header>
        {isEditMode ? (
          <SavingBar isTouched field={SETTING_FIELD.ALIAS}>
            <InputWrapper>
              <Inputer
                value={editingAlias?.name}
                autoFocus
                onChange={(e) =>
                  updateEditingAlias({ ...editingAlias, name: e.target.value })
                }
              />
            </InputWrapper>
          </SavingBar>
        ) : (
          <Title>{alias.original}</Title>
        )}

        {!isEditMode && isChanged && (
          <Fragment>
            <ArrowWrapper>
              <ArrowLine />
              <ArrowIcon />
            </ArrowWrapper>
            <Title>{alias.name}</Title>
          </Fragment>
        )}
      </Header>
      <Footer>
        {isEditMode ? (
          <Suggestion
            items={alias.suggestions}
            onChange={(name) => {
              updateEditingAlias({ ...alias, name })
            }}
          />
        ) : (
          <Fragment>
            <AddButton
              top={10}
              withIcon={false}
              dimWhenIdle
              right={15}
              onClick={() => updateEditingAlias(alias)}
            >
              修改
            </AddButton>
            {isChanged && (
              <AddButton
                top={10}
                withIcon={false}
                dimWhenIdle
                onClick={() => {
                  updateEditingAlias({ ...alias, name: alias.original })
                  resetEdit(SETTING_FIELD.ALIAS)
                }}
              >
                恢复默认
              </AddButton>
            )}
          </Fragment>
        )}
        <SpaceGrow />
      </Footer>
    </Wrapper>
  )
}

export default memo(Item)
