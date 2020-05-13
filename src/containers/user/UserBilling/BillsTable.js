import React from 'react'
import TimeAgo from 'timeago-react'

import { Trans } from '@/utils'

import { ArticleContentLoading } from '@/components/LoadingEffects'
import {
  Wrapper,
  TableWrapper,
  TableHeader,
  HeaderItem,
  RowWrapper,
  CellItem,
  ColorCell,
} from './styles/bills_table'

const StateCell = ({ state }) => {
  switch (state) {
    case 'done':
      return <ColorCell color="yellowgreen">{Trans(state)}</ColorCell>

    case 'reject':
      return <ColorCell color="tomato">{Trans(state)}</ColorCell>

    default:
      return <ColorCell>{Trans(state)}</ColorCell>
  }
}

const TableRow = ({ data }) => {
  if (!data) return null
  return (
    <RowWrapper>
      <CellItem>{data.hashId}</CellItem>
      <CellItem>{data.paymentMethod}</CellItem>
      <CellItem>{data.amount}</CellItem>
      <CellItem>{data.paymentUsage}</CellItem>
      <CellItem>
        <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
      </CellItem>
      <CellItem>
        <StateCell state={data.state} />
      </CellItem>
    </RowWrapper>
  )
}

const BillsTable = ({ data }) => {
  console.log('====> datasouce: ', data.entries)

  return (
    <Wrapper>
      {data ? (
        <div>
          <TableWrapper>
            <TableHeader>
              <HeaderItem>ID</HeaderItem>
              <HeaderItem>付款方式</HeaderItem>
              <HeaderItem>付款金额</HeaderItem>
              <HeaderItem>用途</HeaderItem>
              <HeaderItem>时间</HeaderItem>
              <HeaderItem>状态</HeaderItem>
            </TableHeader>
            {data.entries.map(item => (
              <TableRow key={item.hashId} data={item} />
            ))}
          </TableWrapper>
        </div>
      ) : (
        <ArticleContentLoading />
      )}
    </Wrapper>
  )
}

export default React.memo(BillsTable)
