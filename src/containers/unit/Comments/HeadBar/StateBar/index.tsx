import { FC, memo } from 'react'

import type { TCommentsState } from '@/spec'

import { LineDivider } from '@/widgets/Common'
import Button from '@/widgets/Buttons/Button'
import { LavaLampLoading } from '@/widgets/Loading'

import Actions from './Actions'
import type { TProps as TBase } from '../index'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
  EditIcon,
} from '../../styles/head_bar/state_bar'

type TProps = Pick<
  TBase,
  'mode' | 'apiMode' | 'isAllFolded' | 'loading' | 'basicState'
> & { callEditor?: () => void }

const StateBar: FC<TProps> = ({
  basicState,
  mode,
  isAllFolded,
  loading,
  apiMode,
  callEditor = console.log,
}) => {
  return (
    <Wrapper>
      <TotalCountWrapper>
        <TotalTitle>
          共
          <TotalNum highlight={basicState.isViewerJoined}>
            {basicState.totalCount}
          </TotalNum>
          条讨论
        </TotalTitle>
      </TotalCountWrapper>
      <ActionsWrapper>
        {loading && <LavaLampLoading right={15} />}

        <Button size="small" space={10} onClick={() => callEditor()}>
          <EditIcon />
          讨论
        </Button>
        <LineDivider left={18} />

        <Actions mode={mode} isAllFolded={isAllFolded} apiMode={apiMode} />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(StateBar)
