import { FC, memo } from 'react'

import TeamList from './TeamList'

import {
  Wrapper,
  Item,
  Number,
  // OnlineDesc,
  // OnlineDot,
  Desc,
} from '../styles/holy_grail_layout/subscribe_info'

const ExtraInfo: FC = () => {
  return (
    <Wrapper>
      <Item>
        <Number>1025</Number>
        <Desc>关注者</Desc>
      </Item>
      <Item>
        <TeamList />
        <Desc>团队成员</Desc>
      </Item>

      {/* <Item>
          <Number>25</Number>
          <OnlineDesc>
            <OnlineDot />
            在线
          </OnlineDesc>
      </Item>
      <Item>
          <Number>13</Number>
          <Desc>志愿者</Desc>
      </Item> */}
    </Wrapper>
  )
}

export default memo(ExtraInfo)
