import React from 'react'

import { ICON } from '@/config'
import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  Title,
  OperatorsWrapper,
  Operator,
  HomeIcon,
  LocateIcon,
  ResetIcon,
  HelpHint,
} from './styles/header'

const Header = ({ title, showBack, showReset, goBack, reset }) => {
  return (
    <Wrapper>
      <Title active={showReset}>{title}</Title>
      <OperatorsWrapper>
        <Operator onClick={goBack} show>
          <Tooltip
            content={<HelpHint>返回主目录</HelpHint>}
            placement="bottom"
            delay={1000}
          >
            <HomeIcon src={`${ICON}/shape/home.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showBack} onClick={goBack}>
          <Tooltip
            content={<HelpHint>定位当前选中</HelpHint>}
            placement="bottom"
            delay={1000}
          >
            <LocateIcon src={`${ICON}/shape/locate-solid.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showReset} onClick={reset}>
          <Tooltip
            content={<HelpHint>重置筛选条件</HelpHint>}
            placement="bottom"
            delay={1000}
          >
            <ResetIcon src={`${ICON}/shape/reset.svg`} />
          </Tooltip>
        </Operator>
      </OperatorsWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
