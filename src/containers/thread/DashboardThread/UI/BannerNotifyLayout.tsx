import { FC, memo } from 'react'

import type { TBannerNotifyLayout, TColorName } from '@/spec'

import { BANNER_NOTIFY_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import { Row, Br, Space, SpaceGrow, Inline } from '@/widgets/Common'
import ColorSelector from '@/widgets/ColorSelector'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import CheckLabel from '@/widgets/CheckLabel'

import { SETTING_FIELD } from '../constant'
import SectionLabel from '../SectionLabel'
import SavingBar from '../SavingBar'

import {
  Wrapper,
  SelectWrapper,
  Layout,
  LayoutTitle,
  Block,
  Bar,
  NotifyTextBar,
  NotifyBar,
  NotifyDesc,
  NotifySolidLink,
  NotifyIcon,
  CrossIcon,
  ArrowIcon,
  Main,
  ListsWrapper,
  TagssWrapper,
  BgWrapper,
  BgLabel,
  TheColor,
} from '../styles/ui/banner_notify_layout'
import { edit } from '../logic'

type TProps = {
  layout: TBannerNotifyLayout
  isLayoutTouched: boolean
  isBgTouched: boolean
  saving: boolean
  bg: TColorName
}

const BannerNotifyLayout: FC<TProps> = ({
  layout,
  isLayoutTouched,
  isBgTouched,
  saving,
  bg,
}) => {
  return (
    <Wrapper>
      <SectionLabel
        title="横幅通知"
        desc={
          <>
            全局横幅通知的样式，当用户设置内容时会以一下样式展示。
            <Inline>
              <ArrowButton
                onClick={() =>
                  callDashboardDesc(DASHBOARD_DESC_LAYOUT.POST_LIST)
                }
                size="tiny"
                arrowStyle="simple"
              >
                查看示例
              </ArrowButton>
            </Inline>
          </>
        }
      />
      <SelectWrapper>
        <Layout
          onClick={() =>
            edit(BANNER_NOTIFY_LAYOUT.DEFAULT, 'bannerNotifyLayout')
          }
        >
          <Block $active={layout === BANNER_NOTIFY_LAYOUT.DEFAULT}>
            <NotifyBar bg={bg}>
              <NotifyIcon />
              <NotifyDesc>
                <NotifyTextBar long={120} thin />
              </NotifyDesc>
              <SpaceGrow />
              <NotifySolidLink bg={bg}>
                <NotifyTextBar long={30} thin />
              </NotifySolidLink>
              <Space left={5} />
              <CrossIcon />
            </NotifyBar>

            <Main>
              <ListsWrapper>
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
                <Br bottom={14} />
                <Bar long={55} thin />
                <Br bottom={14} />
                <Bar long={40} thin />
                <Br bottom={14} />
              </ListsWrapper>
              <TagssWrapper>
                <Br bottom={10} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={85} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
                <Br bottom={6} />
              </TagssWrapper>
            </Main>
          </Block>
          <LayoutTitle $active={layout === BANNER_NOTIFY_LAYOUT.DEFAULT}>
            <CheckLabel
              title="间隔式"
              $active={layout === BANNER_NOTIFY_LAYOUT.DEFAULT}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Space right={40} />
        <Layout
          onClick={() =>
            edit(BANNER_NOTIFY_LAYOUT.CENTER, 'bannerNotifyLayout')
          }
        >
          <Block $active={layout === BANNER_NOTIFY_LAYOUT.CENTER}>
            <NotifyBar bg={bg} center>
              <SpaceGrow />
              <Row>
                <NotifyIcon />
                <NotifyDesc>
                  <NotifyTextBar long={80} thin />
                </NotifyDesc>
                <Space right={10} />
                <NotifyTextBar long={20} thin />
                <Space left={5} />
                <ArrowIcon />
              </Row>
              <SpaceGrow />
              <CrossIcon />
            </NotifyBar>

            <Main>
              <ListsWrapper>
                <Bar long={60} thin />
                <Br bottom={14} />
                <Bar long={50} thin />
                <Br bottom={14} />
                <Bar long={55} thin />
                <Br bottom={14} />
                <Bar long={40} thin />
                <Br bottom={14} />
              </ListsWrapper>
              <TagssWrapper>
                <Br bottom={10} />
                <Bar long={60} thin />
                <Br bottom={6} />
                <Bar long={85} thin />
                <Br bottom={6} />
                <Bar long={50} thin />
                <Br bottom={6} />
              </TagssWrapper>
            </Main>
          </Block>
          <LayoutTitle $active={layout === BANNER_NOTIFY_LAYOUT.CENTER}>
            <CheckLabel
              title="居中式"
              $active={layout === BANNER_NOTIFY_LAYOUT.CENTER}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>
      <SavingBar
        isTouched={isLayoutTouched}
        field={SETTING_FIELD.BANNER_NOTIFY_LAYOUT}
        loading={saving}
        top={20}
      />

      <Br top={30} />
      <SavingBar
        isTouched={isBgTouched}
        field={SETTING_FIELD.BANNER_NOTIFY_BG}
        loading={saving}
      >
        <BgWrapper>
          <div>背景色</div>
          <BgLabel bg={bg}>
            <ColorSelector
              activeColor={bg}
              onChange={(color) => edit(color, 'bannerNotifyBg')}
              placement="right"
              offset={[-1, 15]}
            >
              <TheColor color={bg} />
            </ColorSelector>
          </BgLabel>
        </BgWrapper>
      </SavingBar>
    </Wrapper>
  )
}

export default memo(BannerNotifyLayout)
