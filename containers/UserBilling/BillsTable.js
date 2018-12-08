import React from 'react'
import { Table } from 'antd'

// import { ICON_CMD } from '../../config'
import { Wrapper } from './styles/bills_table'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '时间',
    dataIndex: 'insertedAt',
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
    title: '状态',
    dataIndex: 'state',
  },
]
const data = [
  {
    id: '128439',
    paymentMethod: '支付宝',
    amount: '51.2元',
    paymentUsage: 'GilsCodeToo',
    insertedAt: '2018-19-22',
    state: '完成',
  },
  {
    id: '138844',
    paymentMethod: '微信支付',
    amount: '51.2元',
    paymentUsage: '用途',
    insertedAt: '2018-19-22',
    state: '处理中',
  },
]

const BillsTable = () => (
  <Wrapper>
    <Table columns={columns} dataSource={data} size="small" />
  </Wrapper>
)

export default BillsTable
