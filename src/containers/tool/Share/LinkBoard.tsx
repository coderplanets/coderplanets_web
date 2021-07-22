import { FC, memo, Fragment } from 'react'

import { IconButton } from '@/components/Buttons'

import {
  Header,
  TabWrapper,
  TabName,
  BoxWrapper,
  Inputer,
} from './styles/link_board'

const LinkBoard: FC = () => {
  return (
    <Fragment>
      <Header>
        <TabWrapper>
          <TabName $active>URL</TabName>
          <TabName>MD</TabName>
          <TabName>OrgMode</TabName>
        </TabWrapper>
        <IconButton path="article/clipboard.svg" mRight={5} />
      </Header>
      <BoxWrapper>
        <Inputer value="[coderplanets 社区的各种指南都在这里了](https://cper.co/post/45)" />
      </BoxWrapper>
    </Fragment>
  )
}

export default memo(LinkBoard)
