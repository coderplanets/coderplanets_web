/*
 *
 * Catalog index
 *
 */

import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import { buildLog } from '@/utils/logger'
import { ICON } from '@/config'

import MenuButton from '@/widgets/Buttons/MenuButton'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Button from '@/widgets/Buttons/Button'
import Linker from '@/widgets/Linker'

import { VIEW } from '../constant'
import {
  Wrapper,
  BackWrapper,
  MobileBackWrapper,
  BackHeader,
  LineDivider,
  Note,
  Content,
  Block,
  Header,
  Intro,
  MoreIcon,
  Body,
  Title,
  Desc,
  Icon,
} from '../styles/body/catalog'
import { setView, changeCategory } from '../logic'

import demo from '../demo'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const menuOptions = [
  {
    key: 'time',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '参与编辑',
  },
  {
    key: 'hot',
    icon: `${ICON}/menu/hot.svg`,
    title: '贡献者',
  },
]

type TProps = {
  category: string
}

const Catalog: FC<TProps> = ({ category }) => {
  return (
    <Wrapper>
      {isMobile && (
        <MobileBackWrapper>
          <Button
            size="medium"
            onClick={() => setView(VIEW.DEFAULT)}
            ghost
            noBorder
          >
            返回
          </Button>
        </MobileBackWrapper>
      )}

      {!isMobile && (
        <BackWrapper>
          <BackHeader>
            <ArrowButton
              size="medium"
              direction="left"
              onClick={() => setView(VIEW.DEFAULT)}
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
      )}
      <Content>
        {demo.map((item) => (
          <Block key={item.id} active={category === item.title}>
            <Header>
              <Intro>
                <Icon src={item.icon} />
                {item.entries?.length} 杯
              </Intro>
              <MenuButton
                placement="bottom-end"
                options={menuOptions}
                onClick={() => setView(VIEW.EDIT)}
              >
                <MoreIcon />
              </MenuButton>
            </Header>
            <Body onClick={() => changeCategory(item.title)}>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </Body>
          </Block>
        ))}
      </Content>
    </Wrapper>
  )
}

export default memo(Catalog)
