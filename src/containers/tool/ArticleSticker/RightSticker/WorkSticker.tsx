/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, memo } from 'react'

import type { TWorks } from '@/spec'

import WorksInfoCard from '@/widgets/WorksInfoCard'

import { Wrapper } from '../styles/right_sticker/works_sticker'

type TProps = {
  show: boolean
  article: TWorks
}

const WorksSticker: FC<TProps> = ({ show, article }) => {
  return (
    <Wrapper show={show}>
      <WorksInfoCard article={article} />
    </Wrapper>
  )
}

export default memo(WorksSticker)
