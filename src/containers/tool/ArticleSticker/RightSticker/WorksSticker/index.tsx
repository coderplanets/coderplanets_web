/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, memo } from 'react'

import type { TWorks } from '@/spec'

import { Br } from '@/widgets/Common'

import GetMe from './GetMe'
import Contact from './Contact'
import Teams from './Teams'
// import TechStacks from './TechStacks'
import Others from './Others'

import {
  Wrapper,
  Row,
  Title,
  SlishSign,
} from '../../styles/right_sticker/works_sticker'

type TProps = {
  show: boolean
  article: TWorks
}

const WorksSticker: FC<TProps> = ({ show, article }) => {
  return (
    <Wrapper show={show}>
      <Row>
        <SlishSign>//</SlishSign>
        <Title>关于</Title>
      </Row>
      <GetMe article={article} />
      <Br top={30} />
      <Row>
        <SlishSign>//</SlishSign>
        <Title>团队成员</Title>
      </Row>
      <Br top={12} />
      <Teams />
      <Br top={20} />
      <Row>
        <SlishSign>//</SlishSign>
        <Title>关注我们</Title>
      </Row>
      <Contact article={article} />
      <Br top={25} />
      <Row>
        <SlishSign>//</SlishSign>
        <Title>其他</Title>
      </Row>
      <Others article={article} />
    </Wrapper>
  )
}

export default memo(WorksSticker)
