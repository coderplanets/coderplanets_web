import { FC, memo } from 'react'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import { Inline } from '@/widgets/Common'

import Portal from '../Portal'
import Adder from './Adder'
import List from './List'

import { Wrapper } from '../styles/admin'

type TProps = {
  testid?: string
}

const Admin: FC<TProps> = ({ testid = 'admin' }) => {
  return (
    <Wrapper>
      <Portal
        title="管理员"
        desc={
          <>
            添加可参与社区内容管理的账号。
            <Inline>
              <ArrowButton size="tiny" arrowStyle="simple">
                设置参考
              </ArrowButton>
            </Inline>
          </>
        }
      />
      <Adder />
      <List />
    </Wrapper>
  )
}

export default memo(Admin)
