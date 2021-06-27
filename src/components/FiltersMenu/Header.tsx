import { FC, memo } from 'react'

import { ICON } from '@/config'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  Title,
  OperatorsWrapper,
  Operator,
  ResetIcon,
  HelpHint,
} from './styles/header'

type TProps = {
  title: string
  showReset: boolean
  onReset: () => void
}

const Header: FC<TProps> = ({ title, showReset, onReset }) => {
  return (
    <Wrapper>
      <Title active={showReset}>{title}</Title>
      <OperatorsWrapper>
        <Tooltip
          content={<HelpHint>重置筛选条件</HelpHint>}
          placement="bottom"
          delay={1000}
        >
          <Operator show={showReset} onClick={onReset}>
            <ResetIcon src={`${ICON}/shape/reset.svg`} />
          </Operator>
        </Tooltip>
      </OperatorsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
