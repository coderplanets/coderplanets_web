import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import Tooltip from '@/widgets/Tooltip'

import { Wrapper, Num, PinIcon, TooltipPopContent } from './styles/pin_number'

// TODO:  onPin / undoPin

type TProps = {
  num: number
  pinNumberHoverType: 'pin' | 'unpin'
}

const PinNumber: FC<TProps> = ({ num, pinNumberHoverType }) => {
  return (
    <Wrapper>
      <Num>{num}</Num>
      <span>
        {pinNumberHoverType === 'pin' ? (
          <Tooltip
            content={<TooltipPopContent>置顶显示</TooltipPopContent>}
            placement="right"
            delay={1000}
            showArrow={false}
            noPadding
          >
            <PinIcon src={`${ICON_CMD}/navi/pin.svg`} />
          </Tooltip>
        ) : (
          <Tooltip
            content={<TooltipPopContent>取消置顶</TooltipPopContent>}
            placement="right"
            delay={1000}
            showArrow={false}
            noPadding
          >
            <PinIcon src={`${ICON_CMD}/navi/unpin.svg`} />
          </Tooltip>
        )}
      </span>
    </Wrapper>
  )
}

export default memo(PinNumber)
