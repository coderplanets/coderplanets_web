import { FC, memo } from 'react'

import { Wrapper } from '../styles/works_sticker/others'

// type TProps = {
//   show: boolean
//   viewing: TArticle
// }

const Others: FC = () => {
  return (
    <Wrapper>
      <div>是否盈利: </div>
      <div>盈利模式: </div>
    </Wrapper>
  )
}

export default memo(Others)
