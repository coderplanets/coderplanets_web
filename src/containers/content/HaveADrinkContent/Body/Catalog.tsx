/*
 *
 * Catalog index
 *
 */

import { FC, memo } from 'react'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Linker from '@/widgets/Linker'

import {
  Wrapper,
  BackWrapper,
  BackHeader,
  LineDivider,
  Note,
  Content,
  Block,
  Header,
  Intro,
  Timestamp,
  Body,
  Title,
  Desc,
  Icon,
} from '../styles/body/catalog'
import { setView } from '../logic'

import demo from '../demo'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Catalog: FC = () => {
  return (
    <Wrapper>
      <BackWrapper>
        <BackHeader>
          <ArrowButton
            size="medium"
            direction="left"
            onClick={() => setView('default')}
          >
            返回
          </ArrowButton>
        </BackHeader>
        <LineDivider />
        <Note>
          目前确定的分类已全部列出，如果你对现有分类有建议或有更适合的分类，欢迎参与
          <Linker
            src="/feedback"
            external={false}
            text="feedback"
            inline
            left={2}
          />
        </Note>
      </BackWrapper>
      <Content>
        {demo.map((item) => (
          <Block key={item.id} active={item.active}>
            <Header>
              <Intro>
                <Icon src={item.icon} />
                {item.total} 条
              </Intro>
              <Timestamp>{item.updatedAt}</Timestamp>
            </Header>
            <Body>
              <Title>{item.title}</Title>
              <Desc>{cutRest(item.desc, 13)}</Desc>
            </Body>
          </Block>
        ))}
      </Content>
    </Wrapper>
  )
}

export default memo(Catalog)
