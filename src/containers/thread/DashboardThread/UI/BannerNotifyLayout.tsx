import { FC, memo } from 'react'

import type { TBannerNotifyLayout } from '@/spec'

import { BANNER_NOTIFY_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import { Br, Space, SpaceGrow, Inline } from '@/widgets/Common'
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
  NotifyBar,
  NotifyDesc,
  NotifyLink,
  NotifySolidLink,
  CrossIcon,
  ArrowIcon,
  Main,
  ListsWrapper,
  TagssWrapper,
} from '../styles/ui/banner_notify_layout'
import { edit } from '../logic'

type TProps = {
  layout: TBannerNotifyLayout
  isTouched: boolean
  saving: boolean
}

const BannerNotifyLayout: FC<TProps> = ({ layout, isTouched, saving }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="横幅通知"
        desc={
          <>
            全局横幅通知的样式。
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
            <NotifyBar>
              <NotifyDesc>这是一条全局通知，全站可见。</NotifyDesc>
              <SpaceGrow />
              <NotifySolidLink>查看详情</NotifySolidLink>
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
              title="常规式"
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
            <NotifyBar center>
              <NotifyDesc>这是一条全局通知，全站可见。</NotifyDesc>
              <NotifyLink>查看详情</NotifyLink>
              <Space left={5} />
              <ArrowIcon />
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
        isTouched={isTouched}
        field={SETTING_FIELD.BANNER_NOTIFY_LAYOUT}
        loading={saving}
        top={20}
      />
    </Wrapper>
  )
}

export default memo(BannerNotifyLayout)
