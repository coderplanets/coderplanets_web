import React from 'react'
import { Button } from 'antd'

// import { ICON_CMD } from '../../config'
import {
  Wrapper,
  IndexPage,
  SelectorWrapper,
  CurPageNumber,
} from './styles/mobile_pagination'

const hasExtraPage = (totalCount, pageSize) => totalCount > pageSize

const MobilePagination = ({ current, pageSize, total, onChange }) => (
  <Wrapper>
    {current !== 1 && hasExtraPage(total, pageSize) ? (
      <IndexPage onClick={onChange.bind(this, 1)}>首页</IndexPage>
    ) : (
      <div />
    )}

    <SelectorWrapper>
      {current !== 1 && (
        <React.Fragment>
          <Button
            type="primary"
            ghost
            onClick={onChange.bind(this, Math.max(current - 1, 1))}
          >
            上一页
          </Button>
        </React.Fragment>
      )}
      {current !== 1 &&
        current < Math.floor(total / pageSize) && (
          <CurPageNumber>{current}</CurPageNumber>
        )}

      {current <= Math.floor(total / pageSize) && (
        <Button type="primary" ghost onClick={onChange.bind(this, current + 1)}>
          下一页
        </Button>
      )}
    </SelectorWrapper>
    {hasExtraPage(total, pageSize) && (
      <IndexPage onClick={onChange.bind(this, Math.floor(total / pageSize))}>
        末页(
        {Math.floor(total / pageSize)})
      </IndexPage>
    )}
  </Wrapper>
)

export default MobilePagination
