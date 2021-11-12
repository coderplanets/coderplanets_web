/* eslint-disable react/no-array-index-key */
import { FC, memo, Fragment } from 'react'

import {
  Wrapper,
  BotIcon,
  Content,
  Reason,
} from '../../styles/comment/desktop_view/illegal_bar'

type TProps = {
  illegalReason: string[]
  illegalWords: string[]
  isFold?: boolean
}

const IllegalBar: FC<TProps> = ({ illegalReason, illegalWords, isFold }) => {
  return (
    <Wrapper isFold={isFold}>
      <BotIcon />
      <Content>
        该评论包含 [
        {illegalReason.map((reason, index) => (
          <Fragment key={index}>
            <Reason>{reason}</Reason>
            {index !== illegalReason.length - 1 && <>，</>}
          </Fragment>
        ))}
        ] 内容，不便展示。
      </Content>
    </Wrapper>
  )
}

export default memo(IllegalBar)
