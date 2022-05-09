import { FC, memo } from 'react'
import { keys } from 'ramda'

import { ICON } from '@/config'
import {
  Wrapper,
  CursorDivider,
  Icon,
} from '../../styles/panel/author_info/social_list'

type TProps = {
  items: Record<string, string>
}

const SocialList: FC<TProps> = ({ items }) => {
  return (
    <Wrapper>
      <CursorDivider />
      {keys(items).map((platform) => (
        <Icon key={platform} src={`${ICON}/social/${platform}.svg`} />
      ))}
    </Wrapper>
  )
}

export default memo(SocialList)
