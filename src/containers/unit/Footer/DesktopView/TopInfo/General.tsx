import { FC, memo } from 'react'

import BlinkCursor from '@/widgets/BlinkCursor'
import {
  Wrapper,
  CommunityTitle,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = {
  title: string
}

const General: FC<TProps> = ({ title }) => {
  return (
    <Wrapper noBottomBorder>
      <Logo />
      <BlinkCursor duration={2} top={1} />
      <CommunityTitle>{title}</CommunityTitle>
    </Wrapper>
  )
}

export default memo(General)
