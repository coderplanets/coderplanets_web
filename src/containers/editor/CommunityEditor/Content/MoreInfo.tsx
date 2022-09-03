import { FC, memo } from 'react'

import type { TSetupInfoStatus } from '../spec'
import {
  Wrapper,
  LineDivider,
  Block,
  Logo,
  Intro,
  Title,
  Desc,
} from '../styles/content/more_info'

type TProps = {
  status: TSetupInfoStatus
}

const MoreInfo: FC<TProps> = ({ status }) => {
  const { title, desc, logo } = status

  return (
    <Wrapper>
      <LineDivider />
      <Block>
        <Logo src={logo} />
        <Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Intro>
      </Block>
    </Wrapper>
  )
}

export default memo(MoreInfo)
