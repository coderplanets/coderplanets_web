import { FC, memo } from 'react'

import { ICON_BASE } from '@/config'

import { Button } from '@/components/Buttons'

import {
  Wrapper,
  Icon,
  Name,
  JoinDesc,
} from '../styles/desktop_view/sub_community'

// type TProps = {
// }

const SubCommunity: FC = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON_BASE}/pl/javascript.svg`} />
      <Name>javascript</Name>
      <JoinDesc>34 关注者</JoinDesc>
      <Button size="tiny" ghost>
        &nbsp;关&nbsp;&nbsp;注&nbsp;
      </Button>
    </Wrapper>
  )
}

export default memo(SubCommunity)
