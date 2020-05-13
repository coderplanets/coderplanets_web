import React, { useCallback } from 'react'

import { prettyNum } from '@/utils'
import Tooltip from '@/components/Tooltip'

import { Wrapper, NumbersMore, TextMore, DotText } from './styles/more_item'

const MoreItem = ({ users, total, onTotalSelect, showTotalNumber }) => {
  const handleClick = useCallback(() => {
    onTotalSelect({ users, total })
  }, [onTotalSelect, total, users])

  return (
    <Wrapper onClick={handleClick}>
      <Tooltip
        content={showTotalNumber ? '更多' : `共 ${total} 人`}
        duration={0}
      >
        {showTotalNumber ? (
          <TextMore>
            <DotText>...</DotText>
          </TextMore>
        ) : (
          <NumbersMore total={total}>{prettyNum(total)}</NumbersMore>
        )}
      </Tooltip>
    </Wrapper>
  )
}

export default MoreItem
