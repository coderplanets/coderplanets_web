import React from 'react'

import { YesOrNoButtons } from '@/components/Buttons'

import { Wrapper, Note } from './styles/footer'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Note>
        举报成功后社区志愿者会在第一时间处理，处理结果会公示在这里。如果你对社区治理有更好的想法或建议，请联系我们。
      </Note>

      <YesOrNoButtons confirmText="举报" />
    </Wrapper>
  )
}

export default Footer
