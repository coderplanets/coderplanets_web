import React, { FC } from 'react'

import { Br } from '@/components/Common'
import { Wrapper, Title, Desc } from '../styles/invite_box/qa'

type TProps = {
  testid?: string
}

const QA: FC<TProps> = ({ testid = 'membership-qa' }) => {
  return (
    <Wrapper testid={testid}>
      <Title>说明：</Title>
      <Desc>
        内侧阶段，所有新注册用户都会收到一个额外的朋友码，欢迎将它分享给身边的朋友。
      </Desc>
      <Br top={2} />
      <Desc>验证通过后将自动升级为高级账户，为期一年。</Desc>
      <Br top={12} />
      <Desc>感谢你对 coderplanets 的关注和支持。</Desc>
    </Wrapper>
  )
}

export default QA
