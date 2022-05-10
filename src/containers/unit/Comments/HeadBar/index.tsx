import { FC, memo } from 'react'

import type { TCommentsState } from '@/spec'

import { LineDivider } from '@/widgets/Common'
import Button from '@/widgets/Buttons/Button'
import { LavaLampLoading } from '@/widgets/Loading'

import Actions from './Actions'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
  EditIcon,
} from '../styles/head_bar'

import type { TMode, TAPIMode } from '../spec'

export type TProps = {
  mode: TMode
  apiMode: TAPIMode
  isAllFolded: boolean
  loading: boolean
  basicState: TCommentsState
}

const Header: FC<TProps> = ({
  basicState,
  mode,
  isAllFolded,
  loading,
  apiMode,
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

        <Button size="small" space={10}>
          <EditIcon />
          讨论
        </Button>
        <LineDivider left={18} />

        <Actions mode={mode} isAllFolded={isAllFolded} apiMode={apiMode} />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
