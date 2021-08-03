import { FC } from 'react'

import { prettyNum } from '@/utils/helper'
import { Br } from '@/components/Common'
import Tooltip from '@/components/Tooltip'

import type { TProps as TAvatarsProps } from './index'

import {
  Wrapper,
  NumbersMore,
  TextMore,
  DotText,
  StateInfoWrapper,
  TotalCommentStateHint,
  Focus,
} from './styles/more_item'

type TProps = Pick<
  TAvatarsProps,
  'size' | 'total' | 'showTotalNumber' | 'onTotalSelect'
>

const MoreItem: FC<TProps> = ({
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
            <StateInfoWrapper>
              <TotalCommentStateHint>
                评论: <Focus>{total}</Focus>
              </TotalCommentStateHint>
              <Br top={5} />
              <TotalCommentStateHint>
                参与者: <Focus>{total}</Focus>
              </TotalCommentStateHint>
            </StateInfoWrapper>
          )
        }
        delay={500}
        placement="bottom-end"
        noPadding
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
