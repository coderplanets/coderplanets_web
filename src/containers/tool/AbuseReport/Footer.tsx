import { FC } from 'react'

import YesOrNoButtons from '@/widgets/Buttons/YesOrNoButtons'

import { Wrapper } from './styles/footer'
import { goBack } from './logic'

type TProps = {
  view: 'main' | 'detail'
}

const Footer: FC<TProps> = ({ view }) => {
  if (view !== 'detail') return null

  return (
    <Wrapper>
      {/* <Note>举报后社区志愿者会在第一时间【处理】。</Note> */}
      <YesOrNoButtons
        cancelText="上一步"
        confirmText="提交"
        onCancel={goBack}
      />
    </Wrapper>
  )
}

export default Footer
