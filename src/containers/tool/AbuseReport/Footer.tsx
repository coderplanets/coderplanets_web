import { FC } from 'react'

import { YesOrNoButtons } from '@/components/Buttons'

import { Wrapper } from './styles/footer'

type TProps = {
  view: 'main' | 'detail'
}

const Footer: FC<TProps> = ({ view }) => {
  if (view !== 'detail') return null

  return (
    <Wrapper>
      {/* <Note>举报后社区志愿者会在第一时间【处理】。</Note> */}
      <YesOrNoButtons confirmText="举报" />
    </Wrapper>
  )
}

export default Footer
