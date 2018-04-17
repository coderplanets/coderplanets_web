/*
 *
 * CommunitiesContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Trend from 'react-trend'
import { Button, Icon } from 'antd'

// import Link from 'next/link'

import { makeDebugger, storeSelector, getSVGIconPath } from '../../utils'
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
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunitiesContent')
/* eslint-enable no-unused-vars */

const fakeData = [
  {
    title: 'javascript',
    desc: 'the only language that works on every device on earth',
    raw: 'js',
  },
  {
    title: 'Elixir',
    desc: 'Elixir |> for fun',
    raw: 'elixir',
  },
  {
    title: 'React',
    desc: 'Elixir |> for fun',
    raw: 'react',
  },
  {
    title: 'java',
    desc: 'Elixir |> for fun',
    raw: 'java',
  },
  {
    title: 'angular',
    desc: 'give me a chance',
    raw: 'angular',
  },
]

const sparkData = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
const CommunityCard = ({ community }) => (
  <Card>
    <CommunityIcon path={getSVGIconPath(community.raw)} />
    <CardTitle>{community.title}</CardTitle>
    <CardDesc>{community.desc}</CardDesc>
    <ActivitySpark>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={1000}
        autoDrawEasing="ease-in"
        data={sparkData}
        gradient={['#D6ECB2', '#4F966E']}
        radius={15}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <div>10k+ 关注</div>

      <div>
        <Button size="small" type="primary">
          <Icon type="plus" />关注
        </Button>
      </div>
    </CardFooter>
  </Card>
)

const CommunitiesGrid = () => (
  <GridWrapper>
    {fakeData.map(community => (
      <CommunityCard key={community.raw} community={community} />
    ))}
  </GridWrapper>
)

class CommunitiesContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.communitiesContent)
  }

  render() {
    return (
      <Wrapper>
        <CommunitiesGrid />
      </Wrapper>
    )
  }
}

export default inject(storeSelector('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
