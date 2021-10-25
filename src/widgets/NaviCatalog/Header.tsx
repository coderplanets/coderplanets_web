import { FC, memo } from 'react'

import type { TNaviTag } from '@/spec'
import { ICON } from '@/config'
import { nilOrEmpty } from '@/utils/validator'

import Tooltip from '@/widgets/Tooltip'

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

type TProps = {
  title: string
  activeCatalogId: string
  viewPath: TNaviTag[]
  testid?: string

  goHome: () => void
  onReset: () => void
  onLocate: () => void
}

const Header: FC<TProps> = ({
  testid = 'navi-catalog-header',
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
    <Wrapper testid={testid}>
      {title ? <Title active={showReset}>{title}</Title> : <div />}

      <OperatorsWrapper>
        <Operator onClick={goHome} show={!isRootCatalog}>
          <Tooltip
            content={<HelpHint>返回主目录</HelpHint>}
            placement="bottom"
            delay={1000}
            noPadding
          >
            <HomeIcon src={`${ICON}/shape/home.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showLocate} onClick={onLocate}>
          <Tooltip
            content={<HelpHint>定位当前选中</HelpHint>}
            placement="bottom"
            delay={1000}
            noPadding
          >
            <LocateIcon src={`${ICON}/shape/locate-solid.svg`} />
          </Tooltip>
        </Operator>

        <Operator show={showReset} onClick={onReset}>
          <Tooltip
            content={<HelpHint>重置筛选条件</HelpHint>}
            placement="bottom"
            delay={1000}
            noPadding
          >
            <ResetIcon src={`${ICON}/shape/reset.svg`} />
          </Tooltip>
        </Operator>
      </OperatorsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
