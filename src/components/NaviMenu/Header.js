import React from 'react'

import { ICON } from '@/config'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  Title,
  OperatorsWrapper,
  Operator,
  BackIcon,
  ResetIcon,
  HelpHint,
} from './styles/header'

const Header = ({ title, showBack, showReset, goBack, reset }) => {
  return (
    <Wrapper>
      <Title active={showReset}>{title}</Title>
      <OperatorsWrapper>
        <Tooltip
          content={<HelpHint>返回上级菜单</HelpHint>}
          placement="bottom"
          delay={1000}
        >
          <Operator show={showBack} onClick={goBack}>
            <BackIcon src={`${ICON}/shape/navi-back.svg`} />
          </Operator>
        </Tooltip>

        <Tooltip
          content={<HelpHint>重置筛选条件</HelpHint>}
          placement="bottom"
          delay={1000}
        >
          <Operator show={showReset} onClick={reset}>
            <ResetIcon src={`${ICON}/shape/reset.svg`} />
          </Operator>
        </Tooltip>
      </OperatorsWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
