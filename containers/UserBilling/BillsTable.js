import React from 'react'
import { Table } from 'antd'
import TimeAgo from 'timeago-react'

import { ArticleContentLoading } from '@components/LoadingEffects'
// import { ICON_CMD } from '@config'
import { Trans } from '@utils'
import { Wrapper, ColorCell } from './styles/bills_table'

const columns = [
  {
    title: 'ID',
    dataIndex: 'hashId',
  },
  {
    title: '付款方式',
    dataIndex: 'paymentMethod',
  },
  {
    title: '付款金额',
    dataIndex: 'amount',
  },
  {
    title: '用途',
    dataIndex: 'paymentUsage',
  },
  {
    title: '时间',
    dataIndex: 'insertedAt',
    /* eslint-disable-next-line */
    render: text => <TimeAgo datetime={text} locale="zh_CN" />,
  },
  {
    title: '状态',
    dataIndex: 'state',
    /* eslint-disable-next-line */
    render: text => {
      switch (text) {
        case 'done':
          return <ColorCell color="yellowgreen">{Trans(text)}</ColorCell>

        case 'reject':
          return <ColorCell color="tomato">{Trans(text)}</ColorCell>

        default:
          return <ColorCell>{Trans(text)}</ColorCell>
      }
    },
  },
]

const BillsTable = ({ data }) => (
  <Wrapper>
    {data ? (
      <Table
        columns={columns}
        dataSource={data.entries}
        size="small"
        rowKey="hashId"
        locale={{ emptyText: '暂无账单信息' }}
      />
    ) : (
      <ArticleContentLoading />
    )}
  </Wrapper>
)

export default BillsTable
