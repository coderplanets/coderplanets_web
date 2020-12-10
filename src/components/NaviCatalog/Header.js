import React from 'react'

import { ICON } from '@/config'
import { nilOrEmpty } from '@/utils'

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

const Header = ({
  title,
  activeCatalogId,
  goHome,
  onReset,
  onLocate,
  viewPath,
}) => {
  const isRootCatalog = nilOrEmpty(viewPath)
  const showReset = activeCatalogId !== ''
  const showLocate = activeCatalogId !== ''

  return (
    <Wrapper>
      {title ? <Title active={showReset}>{title}</Title> : <div />}

      <OperatorsWrapper>
        <Operator onClick={goHome} show={!isRootCatalog}>
          <Tooltip
            content={<HelpHint>返回主目录</HelpHint>}
            placement="bottom"
            delay={1000}
          >
            <HomeIcon src={`${ICON}/shape/home.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showLocate} onClick={onLocate}>
          <Tooltip
            content={<HelpHint>定位当前选中</HelpHint>}
            placement="bottom"
            delay={1000}
          >
            <LocateIcon src={`${ICON}/shape/locate-solid.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showReset} onClick={onReset}>
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
