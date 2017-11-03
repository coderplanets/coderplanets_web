import styled from 'styled-components'
import { theme } from '../../utils/themes'

const AntOverWrite = styled.div`
  .ant-btn-background-ghost.ant-btn-primary {
    color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }

  .ant-btn:focus,
  .ant-btn:hover {
    background-color: ${theme('button.hoverBg')};
  }
  .ant-btn:active {
    background-color: ${theme('button.activeBg')};
  }

  .ant-btn-primary {
    color: ${theme('button.fg')};
    background-color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }

  .ant-btn-clicked:after {
    border: ${theme('button.clicked')};
  }

  .ant-tabs-bar {
    border-bottom: ${theme('taber.baseline')};
  }
  .ant-tabs-ink-bar {
    background-color: ${theme('taber.bottom_bar')};
  }
  .ant-tabs-nav .ant-tabs-tab {
    color: ${theme('taber.normalText')};
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${theme('taber.activeText')};
    font-weight: bold;
  }
`

export default AntOverWrite
