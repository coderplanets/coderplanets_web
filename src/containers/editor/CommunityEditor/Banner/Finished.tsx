/* eslint-disable jsx-a11y/accessible-emoji */
import { FC, memo } from 'react'

import { Wrapper, Title, Desc } from '../styles/banner/finished'

// import type { TSetupDomainStatus, TValidState } from '../spec'

const Finished: FC = () => {
  return (
    <Wrapper>
      <Title>👏🏻 &nbsp;&nbsp;感谢你的信任</Title>
      <Desc>申请将尽快被处理，结果将以邮件等形式告知。</Desc>
    </Wrapper>
  )
}

export default memo(Finished)
