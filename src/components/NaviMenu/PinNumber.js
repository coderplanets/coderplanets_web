import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import Tooltip from '@components/Tooltip'

import { Wrapper, Num, PinIcon, TooltipPopContent } from './styles/pin_number'

// TODO:  onPin / undoPin

const PinNumber = ({ num, pinNumberHoverType }) => {
  return (
    <Wrapper>
      <Num>{num}</Num>
      <span>
        {pinNumberHoverType === 'pin' ? (
          <Tooltip
            content={<TooltipPopContent>置顶显示</TooltipPopContent>}
            placement="right"
            delay={1000}
            noDefaultPadding
          >
            <PinIcon src={`${ICON_CMD}/navi/pin.svg`} />
          </Tooltip>
        ) : (
          <Tooltip
            content={<TooltipPopContent>取消置顶</TooltipPopContent>}
            placement="right"
            delay={1000}
            noDefaultPadding
          >
            <PinIcon src={`${ICON_CMD}/navi/unpin.svg`} />
          </Tooltip>
        )}
      </span>
    </Wrapper>
  )
}

PinNumber.propTypes = {
  num: T.number.isRequired,
  pinNumberHoverType: T.oneOf(['pin', 'unpin']).isRequired,
  // onPin: T.func.isRequired,
  // undoPin: T.func.isRequired,
}

PinNumber.defaultProps = {}

export default React.memo(PinNumber)
