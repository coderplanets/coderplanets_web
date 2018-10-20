/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Pagi, Button, Icon, Tooltip, TrendLine } from '../../components'
import { makeDebugger, storePlug, prettyNum } from '../../utils'

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
} from './styles'

import * as logic from './logic'

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
            <Icon type="check" />
            已关注
          </Button>
        </Tooltip>
      ) : (
        <Button
          size="small"
          type="primary"
          onClick={logic.subscribe.bind(this, community.id)}
        >
          <Icon type="plus" />
          关注
        </Button>
      )}
    </div>
  )
}

const CommunityCard = ({ community, restProps }) => (
  <Card>
    <CommunityIcon src={community.logo} />
    <CardTitle>{community.title}</CardTitle>
    <CardDesc>{community.desc}</CardDesc>
    <ActivitySpark>
      <TrendLine data={community.contributesDigest} />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <React.Fragment>
        {/* TODO: number color should be different when number grow large */}
        {prettyNum(community.subscribersCount)}{' '}
        {community.subscribersCount < 1000 ? '人关注' : '关注'}
      </React.Fragment>

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
  componentDidMount() {
    const { communitiesContent } = this.props
    logic.init(communitiesContent)
  }

  render() {
    const { communitiesContent } = this.props
    const { pagedCommunitiesData } = communitiesContent

    return (
      <Wrapper>
        {pagedCommunitiesData ? (
          <React.Fragment>
            <CommunitiesGrid
              entries={pagedCommunitiesData.entries}
              restProps={{ ...communitiesContent }}
            />
            <Pagi
              left="-10px"
              pageNumber={pagedCommunitiesData.pageNumber}
              pageSize={pagedCommunitiesData.pageSize}
              totalCount={pagedCommunitiesData.totalCount}
              onChange={logic.pageChange}
            />
          </React.Fragment>
        ) : null}
      </Wrapper>
    )
  }
}

export default inject(storePlug('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
