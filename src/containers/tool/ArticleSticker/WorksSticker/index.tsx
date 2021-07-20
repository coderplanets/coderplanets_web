/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, memo } from 'react'

import type { TArticle } from '@/spec'

import { Br } from '@/components/Common'

import About from './About'
import Teams from './Teams'
import TechStacks from './TechStacks'
import Others from './Others'

import { Wrapper, Row, Title, CommentSign } from '../styles/works_sticker'

type TProps = {
  show: boolean
  viewing: TArticle
}

const WorksSticker: FC<TProps> = ({ show, viewing }) => {
  return (
    <Wrapper show={show}>
      <Row>
        <CommentSign>//</CommentSign>
        <Title>关于</Title>
      </Row>
      <About />
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
        <Title>技术栈</Title>
      </Row>
      <Br top={15} />
      <TechStacks />
      <Br top={20} />
      <Row>
        <CommentSign>//</CommentSign>
        <Title>其他</Title>
      </Row>
      <Others />
    </Wrapper>
  )
}

export default memo(WorksSticker)
