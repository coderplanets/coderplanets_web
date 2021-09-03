/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, memo } from 'react'

import type { TArticle } from '@/spec'

import { Br } from '@/components/Common'

import GetMe from './GetMe'
import Contact from './Contact'
import Teams from './Teams'
// import TechStacks from './TechStacks'
import Others from './Others'

import {
  Wrapper,
  Row,
  Title,
  CommentSign,
} from '../../styles/right_sticker/works_sticker'

type TProps = {
  show: boolean
  article: TArticle
}

const WorksSticker: FC<TProps> = ({ show, article }) => {
  return (
    <Wrapper show={show}>
      <Row>
        <CommentSign>//</CommentSign>
        <Title>关于</Title>
      </Row>
      <GetMe />
      <Br top={30} />
      <Row>
        <CommentSign>//</CommentSign>
        <Title>团队成员</Title>
      </Row>
      <Br top={12} />
      <Teams />
      <Br top={20} />
      <Row>
        <CommentSign>//</CommentSign>
        <Title>关注我们</Title>
      </Row>
      <Contact />
      <Br top={25} />
      <Row>
        <CommentSign>//</CommentSign>
        <Title>其他</Title>
      </Row>
      <Others />
    </Wrapper>
  )
}

export default memo(WorksSticker)
