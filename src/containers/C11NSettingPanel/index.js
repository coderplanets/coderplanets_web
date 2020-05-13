/*
 *
 * C11NSettingPanel
 *
 */

import React from 'react'
import R from 'ramda'

import { connectStore, buildLog } from '@/utils'
import { THREAD, C11N } from '@/constant'

import { Br } from '@/components/Common'
import { Radio } from '@/components/Switcher'

import { Wrapper, HeaderTitle, Title, Desc, Didiver } from './styles'
import { useInit, onC11NChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:C11NSettingPanel')

const C11NSettingPanelContainer = ({ c11NSettingPanel }) => {
  useInit(c11NSettingPanel)

  const { accountInfo, curThread } = c11NSettingPanel

  const {
    customization: {
      bannerLayout,
      contentsLayout,
      contentDivider,
      contentHover,
      markViewed,
      displayDensity,
    },
  } = accountInfo

  return (
    <Wrapper testid="c11NSettingPanel">
      <React.Fragment>
        <HeaderTitle>自定义阅读设置</HeaderTitle>
        <br />
        <Title>社区视图</Title>
        <Desc>社区摘要信息的显示模式。</Desc>
        <Br top="10px" />
        <Radio
          items={[
            {
              value: '扩展模式',
              key: C11N.DIGEST,
            },
            {
              value: '简洁模式',
              key: C11N.BRIEF,
            },
          ]}
          activeKey={bannerLayout}
          onChange={item =>
            onC11NChange({
              bannerLayout: item.key,
            })
          }
        />
        <Didiver />

        <Title>文章视图</Title>
        <Desc>
          浏览内容时列表的显示方式, 部分板块(如视频，开源项目等)不支持列表视图。
        </Desc>

        {!R.contains(curThread, [THREAD.VIDEO, THREAD.REPO]) ? (
          <React.Fragment>
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
              onChange={item =>
                onC11NChange({
                  contentsLayout: item.key,
                })
              }
            />
            <Didiver />
          </React.Fragment>
        ) : (
          <Didiver />
        )}
      </React.Fragment>

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
        onChange={item =>
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
        onChange={item =>
          onC11NChange({
            contentHover: item.key,
          })
        }
      />

      {R.contains(curThread, [THREAD.POST, THREAD.JOB]) ? (
        <React.Fragment>
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
            onChange={item =>
              onC11NChange({
                contentDivider: item.key,
              })
            }
          />
          <Didiver />
        </React.Fragment>
      ) : (
        <Didiver />
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
        onChange={item =>
          onC11NChange({
            displayDensity: item.key,
          })
        }
      />
    </Wrapper>
  )
}

export default connectStore(C11NSettingPanelContainer)
