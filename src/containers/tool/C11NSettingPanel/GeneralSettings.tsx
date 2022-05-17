import { FC, memo } from 'react'
import { contains } from 'ramda'
import { isMobile } from 'react-device-detect'

import type { TThread, TC11N } from '@/spec'
import { THREAD, C11N } from '@/constant'

import { Br, Divider } from '@/widgets/Common'
import { Radio } from '@/widgets/Switcher'

import { Wrapper, Title, Desc } from './styles/gerneral_settings'
import { onC11NChange } from './logic'

type TProps = {
  curThread: TThread
  customization: TC11N
}

const GeneralSettings: FC<TProps> = ({ curThread, customization }) => {
  const { bannerLayout, contentDivider, markViewed, displayDensity } =
    customization

  return (
    <Wrapper>
      <Title>布局模式</Title>
      <Desc>社区布局的显示模式 {isMobile && '(手机端左右布局不生效)'}。</Desc>
      <Br top={10} />
      <Radio
        size="small"
        items={[
          {
            value: '经典布局',
            key: C11N.CLASSIC,
          },
          {
            value: '圣杯布局',
            key: C11N.SIMPLE,
            dimOnActive: isMobile,
          },
        ]}
        activeKey={bannerLayout}
        onChange={(item) =>
          onC11NChange({
            bannerLayout: item.key,
          })
        }
      />
      <Divider top={25} bottom={25} />

      <Title>阅读辅助</Title>
      <Br top={10} />
      <Desc>在帖子/文章头部显示“阅”标记。</Desc>
      <Radio
        size="small"
        items={[
          {
            value: '已读标记',
            key: true,
          },
          {
            value: '不标记',
            key: false,
            dimOnActive: true,
          },
        ]}
        activeKey={markViewed}
        onChange={(item) =>
          onC11NChange({
            markViewed: item.key,
          })
        }
      />

      {contains(curThread, [THREAD.POST, THREAD.JOB]) ? (
        <>
          <Br top={25} />
          <Desc>在帖子/文章下方显示辅助分割线。</Desc>
          <Radio
            size="small"
            items={[
              {
                value: '辅助分隔',
                key: true,
              },
              {
                value: '无分隔',
                key: false,
                dimOnActive: true,
              },
            ]}
            activeKey={contentDivider}
            onChange={(item) =>
              onC11NChange({
                contentDivider: item.key,
              })
            }
          />
          <Divider top={25} bottom={25} />
        </>
      ) : (
        <Divider top={25} bottom={25} />
      )}

      <Title>显示密度</Title>
      <Desc>每页帖子的默认显示条数。</Desc>
      <Br top={10} />
      <Radio
        size="small"
        items={[
          {
            value: '20条',
            key: '20',
          },
          {
            value: '25条',
            key: '25',
          },
          {
            value: '30条',
            key: '30',
          },
        ]}
        activeKey={displayDensity}
        onChange={(item) => onC11NChange({ displayDensity: item.key })}
      />
    </Wrapper>
  )
}

export default memo(GeneralSettings)
