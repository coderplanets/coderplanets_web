import { FC, memo, Fragment } from 'react'

import { IconButton } from '@/components/Buttons'

import {
  TabWrapper,
  TabName,
  BoxWrapper,
  Inputer,
  CopyBtn,
} from './styles/link_board'

const LinkBoard: FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default memo(LinkBoard)
