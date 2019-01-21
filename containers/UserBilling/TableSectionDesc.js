import React from 'react'

import { EMAIL_CLUB } from 'config'
import { Wrapper, MailWrapper } from './styles/table_section_desc'

const TableSectionDesc = ({ data: { totalCount } }) => {
  if (totalCount === 0) {
    return (
      <Wrapper>
        <div>未找到相关记录，欢迎升级体验。</div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      共找到 {totalCount} 条记录, 如有任何疑问请随时{' '}
      <MailWrapper href={`mailto:${EMAIL_CLUB}`}>联系我们。</MailWrapper>
    </Wrapper>
  )
}

export default TableSectionDesc
