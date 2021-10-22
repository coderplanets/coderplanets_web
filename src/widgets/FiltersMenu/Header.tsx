import { FC, memo } from 'react'

import { ICON } from '@/config'
import Tooltip from '@/widgets/Tooltip'
import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  OperatorsWrapper,
  Operator,
  ResetIcon,
  HelpHint,
} from './styles/header'

type TProps = {
  showReset: boolean
  onReset: () => void
}

const Header: FC<TProps> = ({ showReset, onReset }) => {
  return (
    <Wrapper>
      <SpaceGrow />
      <OperatorsWrapper>
        <Tooltip
          content={<HelpHint>重置筛选条件</HelpHint>}
          placement="bottom"
          delay={1000}
        >
          <Operator show={showReset} onClick={onReset}>
            <ResetIcon src={`${ICON}/shape/reset.svg`} />
            重置
          </Operator>
        </Tooltip>
      </OperatorsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
