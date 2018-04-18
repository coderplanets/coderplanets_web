/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Trend from 'react-trend'
import { Button, Icon, Pagination } from 'antd'
// import Link from 'next/link'

import { makeDebugger, storeSelector, pagiCustomRender } from '../../utils'
import * as logic from './logic'
import {
  Wrapper,
  GridWrapper,
  Card,
  CommunityIcon,
  CardTitle,
  CardDesc,
  ActivitySpark,
  Divider,
  CardFooter,
  Pagi,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunitiesContent')
/* eslint-enable no-unused-vars */

const CommunityCard = ({ community }) => (
  <Card>
    <CommunityIcon path={community.logo} />
    <CardTitle>{community.title}</CardTitle>
    <CardDesc>{community.desc}</CardDesc>
    <ActivitySpark>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={200}
        autoDrawEasing="ease-in"
        data={community.recentContributesDigest}
        gradient={['#D6ECB2', '#4F966E']}
        radius={15}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <div>{community.subscribersCount} &nbsp;人关注</div>

      <div>
        <Button size="small" type="primary">
          <Icon type="plus" />关注
        </Button>
      </div>
    </CardFooter>
  </Card>
)

const CommunitiesGrid = ({ entries }) => (
  <GridWrapper>
    {entries.map(community => (
      <CommunityCard key={community.raw} community={community} />
    ))}
  </GridWrapper>
)

class CommunitiesContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.communitiesContent)
  }

  render() {
    const { communities } = this.props.communitiesContent
    debug('@--> communities ------> ', communities)
    return (
      <Wrapper>
        <CommunitiesGrid entries={communities.entries} />

        <Pagi>
          <Pagination
            current={communities.pageNumber}
            pageSize={communities.pageSize}
            total={communities.totalCount}
            itemRender={pagiCustomRender}
            onChange={debug}
          />
        </Pagi>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
