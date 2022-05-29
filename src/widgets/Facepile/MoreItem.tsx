import { FC } from 'react'

// import { Br } from '@/widgets/Common'
// import Tooltip from '@/widgets/Tooltip'

import type { TProps as TAvatarsProps } from './index'

import RealNumber from './RealNumber'

import {
  Wrapper,
  TextMore,
  DotText,
  // StateInfoWrapper,
  // TotalCommentStateHint,
  // Focus,
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
      {!showTotalNumber ? (
        <TextMore size={size} total={total}>
          <DotText>..</DotText>
        </TextMore>
      ) : (
        <RealNumber total={total} size={size} />
      )}

      {/* <Tooltip
        content={
          showTotalNumber ? (
            '更多'
          ) : (
            <StateInfoWrapper>
              <TotalCommentStateHint>
                讨论: <Focus>{total}</Focus>
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
        <div>...</div>
      </Tooltip> */}
    </Wrapper>
  )
}

export default MoreItem
