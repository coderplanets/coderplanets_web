import React from 'react'

import { prettyNum } from '@/utils'
import Tooltip from '@/components/Tooltip'

import type { TProps as TAvatarsProps } from './index'

import {
  Wrapper,
  NumbersMore,
  TextMore,
  DotText,
  TotalCommentStateHint,
  Focus,
} from './styles/more_item'

type TProps = Pick<
  TAvatarsProps,
  'size' | 'total' | 'showTotalNumber' | 'onTotalSelect'
>

const MoreItem: React.FC<TProps> = ({
  size,
  total,
  onTotalSelect,
  showTotalNumber,
}) => {
  return (
    <Wrapper size={size} onClick={() => onTotalSelect()}>
      <Tooltip
        content={
          showTotalNumber ? (
            '更多'
          ) : (
            <TotalCommentStateHint>
              共 <Focus>{total}</Focus> 条评论
            </TotalCommentStateHint>
          )
        }
      >
        {showTotalNumber ? (
          <TextMore size={size} total={total}>
            <DotText>...</DotText>
          </TextMore>
        ) : (
          <NumbersMore total={total} size={size}>
            {prettyNum(total)}
          </NumbersMore>
        )}
      </Tooltip>
    </Wrapper>
  )
}

export default MoreItem
