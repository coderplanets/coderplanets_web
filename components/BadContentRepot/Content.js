import React from 'react'
import { Button } from 'antd'

import { ICON_CMD } from '../../config'

import SectionLabel from '../SectionLabel'
import { Wrapper, Divider } from './styles/content'

const Content = () => (
  <Wrapper>
    <Divider />
    <SectionLabel
      title="杠精举报"
      iconSrc={`${ICON_CMD}/gangjing.svg`}
      desc="言语不友善, 无依据的抬杠/诋毁他人, 低俗无聊言论等"
      addonNode={
        <Button size="small" type="primary" ghost>
          是的, 去举报
        </Button>
      }
    />
    <Divider />
    <SectionLabel
      title="侵权举报"
      iconSrc={`${ICON_CMD}/police1.svg`}
      desc="该内容侵犯了我的版权, 或包含盗版 / 违规转载等。"
      addonNode={
        <Button size="small" type="primary" ghost>
          是的, 去举报
        </Button>
      }
    />
    <Divider />
    <SectionLabel
      title="违法信息举报"
      iconSrc={`${ICON_CMD}/police2.svg`}
      desc="该内容涉及政治，色情，暴力，民族宗教, 地域攻击等违法信息。"
      addonNode={
        <Button size="small" type="primary" ghost>
          是的, 去举报
        </Button>
      }
    />
  </Wrapper>
)

export default Content
