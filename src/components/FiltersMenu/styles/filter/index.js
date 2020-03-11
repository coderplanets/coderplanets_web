import styled from 'styled-components'

// import Img from '@Img'
import { Radio } from 'antd'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  padding: 4px 6px;
  padding-top: 0;
`
export const SmallRadio = styled(Radio)`
  ${cs.flex('align-center')};
  transform: scale(0.9);
  margin-bottom: 6px;
  margin-right: -2px;

  .ant-radio-wrapper {
    margin-right: 0;
  }
  span.ant-radio + * {
    padding-right: 0;
  }
`
export const Item = styled.div`
  ${cs.flex('align-center', 'justify-end')};
  width: 100%;
`
