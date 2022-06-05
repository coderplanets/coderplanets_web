import { FC, memo } from 'react'

import SectionLabel from '../SectionLabel'
import { Wrapper, Label, TheColor } from '../styles/ui/primary_color'

const PrimaryColor: FC = () => {
  return (
    <Wrapper>
      <SectionLabel
        title="主题色"
        desc="设置后会在按钮，标签选择器，功能性文字等组件显示该个性化主题色。"
      />
      <Label>
        <TheColor />
      </Label>
    </Wrapper>
  )
}

export default memo(PrimaryColor)
