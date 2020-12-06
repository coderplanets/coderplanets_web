/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

// import { SpaceGrow } from '@/components/Common'
import {
  Wrapper,
  Title,
  Card,
  CurCard,
  Operator,
  BackIcon,
} from '../styles/children_menu/dashboard'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const Dashboard = ({ parentMenuItem, goBack }) => {
  return (
    <Wrapper>
      <Card>
        <Title>{parentMenuItem.title}</Title>
        <Operator show onClick={goBack}>
          <BackIcon src={`${ICON}/shape/navi-back.svg`} />
        </Operator>
      </Card>
      <CurCard>
        <Title>建筑之美</Title>
      </CurCard>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  parentMenuItem: T.any.isRequired, // TODO
  goBack: T.func.isRequired,
}

Dashboard.defaultProps = {}

export default React.memo(Dashboard)
