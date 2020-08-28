import React from 'react'
import { contains } from 'ramda'

import { THREAD, C11N } from '@/constant'

import { Br } from '@/components/Common'
import { Radio } from '@/components/Switcher'

import { Wrapper, Title, Desc, Divider } from './styles/gerneral_settings'
import { onC11NChange } from './logic'

const GeneralSettings = ({ curThread, customization }) => {
  const {
    bannerLayout,
    contentsLayout,
    contentDivider,
    contentHover,
    markViewed,
    displayDensity,
  } = customization

  return (
    <Wrapper>
      <Title>布局模式</Title>
      <Desc>社区布局的显示模式。</Desc>
      <Br top="10px" />
      <Radio
        items={[
          {
            value: '上下布局',
            key: C11N.DIGEST,
          },
          {
            value: '左右布局',
            key: C11N.DIGEST_ROW,
          },
          {
            value: '简洁布局',
            key: C11N.BRIEF,
          },
        ]}
        activeKey={bannerLayout}
        onChange={(item) =>
          onC11NChange({
            bannerLayout: item.key,
          })
        }
      />
      <Divider />

      <Title>文章视图</Title>
      <Desc>
        浏览内容时列表的显示方式, 部分板块(如视频，开源项目等)不支持列表视图。
      </Desc>

      {!contains(curThread, [THREAD.VIDEO, THREAD.REPO]) ? (
        <>
          <Br top="10px" />
          <Radio
            items={[
              {
                value: '列表视图',
                key: C11N.LIST,
              },
              {
                value: '摘要视图',
                key: C11N.DIGEST,
              },
            ]}
            activeKey={contentsLayout}
            onChange={(item) =>
              onC11NChange({
                contentsLayout: item.key,
              })
            }
          />
          <Divider />
        </>
      ) : (
        <Divider />
      )}

      <Title>阅读辅助</Title>
      <Br top="10px" />
      <Desc>在帖子/文章头部显示“阅”标记。</Desc>
      <Radio
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

      <Br top="25px" />
      <Desc>鼠标停留在帖子/文章时显示辅助背景。</Desc>
      <Radio
        items={[
          {
            value: '悬停背景',
            key: true,
          },
          {
            value: '不显示',
            key: false,
            dimOnActive: true,
          },
        ]}
        activeKey={contentHover}
        onChange={(item) =>
          onC11NChange({
            contentHover: item.key,
          })
        }
      />

      {contains(curThread, [THREAD.POST, THREAD.JOB]) ? (
        <>
          <Br top="25px" />
          <Desc>在帖子/文章下方显示辅助分割线。</Desc>
          <Radio
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
          <Divider />
        </>
      ) : (
        <Divider />
      )}

      <Title>显示密度</Title>
      <Desc>每页帖子的默认显示条数。</Desc>
      <Br top="10px" />
      <Radio
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

export default GeneralSettings
