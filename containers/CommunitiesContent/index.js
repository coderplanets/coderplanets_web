/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Trend from 'react-trend'
import { Button, Icon, Pagination, Tooltip } from 'antd'
// import Link from 'next/link'

import {
  makeDebugger,
  storeSelector,
  pagiCustomRender,
  prettyNum,
} from '../../utils'
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

const SubscribeBtn = ({
  community,
  restProps: { subscribing, subscribingId },
}) => {
  if (subscribing && community.id === subscribingId) {
    return (
      <div>
        <Button size="small" type="primary">
          <Icon type="loading" /> 关注
        </Button>
      </div>
    )
  }
  return (
    <div>
      {community.viewerHasSubscribed ? (
        <Tooltip title="取消关注" mouseEnterDelay={1} placement="bottom">
          <Button
            size="small"
            type="primary"
            ghost
            onClick={logic.unSubscribe.bind(this, community.id)}
          >
            <Icon type="check" />已关注
          </Button>
        </Tooltip>
      ) : (
        <Button
          size="small"
          type="primary"
          onClick={logic.subscribe.bind(this, community.id)}
        >
          <Icon type="plus" />关注
        </Button>
      )}
    </div>
  )
}

const CommunityCard = ({ community, restProps }) => (
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
        data={community.contributesDigest}
        gradient={['#D6ECB2', '#4F966E']}
        radius={15}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <div>
        {/* TODO: number color should be different when number grow large */}
        {prettyNum(community.subscribersCount)}{' '}
        {community.subscribersCount < 1000 ? '人关注' : '关注'}
      </div>

      <SubscribeBtn community={community} restProps={restProps} />
    </CardFooter>
  </Card>
)

const CommunitiesGrid = ({ entries, restProps }) => (
  <GridWrapper>
    {entries.map(community => (
      <CommunityCard
        key={community.raw}
        community={community}
        restProps={restProps}
      />
    ))}
  </GridWrapper>
)

class CommunitiesContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.communitiesContent)
  }

  render() {
    const { communities } = this.props.communitiesContent

    return (
      <Wrapper>
        <CommunitiesGrid
          entries={communities.entries}
          restProps={{ ...this.props.communitiesContent }}
        />

        <Pagi>
          <Pagination
            current={communities.pageNumber}
            pageSize={communities.pageSize}
            total={communities.totalCount}
            itemRender={pagiCustomRender}
            onChange={logic.pageChange}
          />
        </Pagi>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
