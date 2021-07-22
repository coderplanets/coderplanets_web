import { FC, memo } from 'react'

import { IconButton } from '@/components/Buttons'

import {
  Wrapper,
  TabWrapper,
  TabName,
  BoxWrapper,
  Inputer,
  CopyBtn,
} from './styles/link_board'

const LinkBoard: FC = () => {
  return (
    <Wrapper>
      <TabWrapper>
        <TabName $active>URL</TabName>
        <TabName>MD</TabName>
        <TabName>OrgMode</TabName>
      </TabWrapper>
      <BoxWrapper>
        <Inputer value="https://cper.co/post/1" />
        <CopyBtn>
          <IconButton
            path="article/clipboard.svg"
            mLeft={10}
            mRight={0}
            size={20}
          />
        </CopyBtn>
      </BoxWrapper>
    </Wrapper>
  )
}

export default memo(LinkBoard)
