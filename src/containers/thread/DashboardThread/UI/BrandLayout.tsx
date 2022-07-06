import { FC, memo } from 'react'

import type { TBrandLayout } from '@/spec'

import { BRAND_LAYOUT, DASHBOARD_DESC_LAYOUT } from '@/constant'
import { callDashboardDesc } from '@/utils/helper'

import { Space, Divider, Inline } from '@/widgets/Common'
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
  Brand,
  BrandIcon,
  BrandTitle,
} from '../styles/ui/brand_layout'
import { edit } from '../logic'

type TProps = {
  layout: TBrandLayout
  isTouched: boolean
  saving: boolean
}

const LogoLayout: FC<TProps> = ({ layout, isTouched, saving }) => {
  return (
    <Wrapper>
      <SectionLabel
        title="Logo 样式"
        desc={
          <>
            页首 Logo 的展示形式。
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
        <Layout onClick={() => edit(BRAND_LAYOUT.BOTH, 'brandLayout')}>
          <Block $active={layout === BRAND_LAYOUT.BOTH}>
            <Brand>
              <BrandIcon />
              <Space right={7} />
              <BrandTitle>Groupher</BrandTitle>
            </Brand>
            <Divider top={15} />
          </Block>
          <LayoutTitle $active={layout === BRAND_LAYOUT.BOTH}>
            <CheckLabel
              title="Logo & 文字"
              $active={layout === BRAND_LAYOUT.BOTH}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Layout onClick={() => edit(BRAND_LAYOUT.LOGO, 'brandLayout')}>
          <Block $active={layout === BRAND_LAYOUT.LOGO}>
            <Brand>
              <BrandIcon />
            </Brand>
            <Divider top={15} />
          </Block>
          <LayoutTitle $active={layout === BRAND_LAYOUT.LOGO}>
            <CheckLabel
              title="仅 Logo"
              $active={layout === BRAND_LAYOUT.LOGO}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
        <Layout onClick={() => edit(BRAND_LAYOUT.TEXT, 'brandLayout')}>
          <Block $active={layout === BRAND_LAYOUT.TEXT}>
            <Brand>
              <BrandTitle>Groupher</BrandTitle>
            </Brand>
            <Divider top={15} />
          </Block>
          <LayoutTitle $active={layout === BRAND_LAYOUT.TEXT}>
            <CheckLabel
              title="仅文字"
              $active={layout === BRAND_LAYOUT.TEXT}
              top={15}
              left={-15}
            />
          </LayoutTitle>
        </Layout>
      </SelectWrapper>
      <SavingBar
        isTouched={isTouched}
        field={SETTING_FIELD.BRAND_LAYOUT}
        loading={saving}
        top={20}
      />
    </Wrapper>
  )
}

export default memo(LogoLayout)
