/* eslint-disable react/jsx-no-comment-textnodes */

import { FC, memo } from 'react'

import type { TWorks } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Br } from '@/widgets/Common'

import About from './About'
import Contact from './Contact'
import Teams from './Teams'
import Others from './Others'

import { Wrapper, Row, Title, SlashSign, Divider } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:WorksInfoCard:index')

type TProps = {
  article: TWorks
}

const WorksInfoCard: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <Row>
        <SlashSign>//</SlashSign>
        <Title>关于</Title>
      </Row>
      <About article={article} />
      <Divider top={20} bottom={18} />
      <Row>
        <SlashSign>//</SlashSign>
        <Title>团队成员</Title>
      </Row>
      <Br top={12} />
      <Teams teammates={article.teammates} />
      <Divider top={20} bottom={10} />
      <Row>
        <SlashSign>//</SlashSign>
        <Title>关注我们</Title>
      </Row>
      <Contact article={article} />
      <Divider top={24} bottom={20} />
      <Row>
        <SlashSign>//</SlashSign>
        <Title>其他</Title>
      </Row>
      <Others article={article} />
    </Wrapper>
  )
}

export default memo(WorksInfoCard)
