import { FC, useState } from 'react'

import Footer from './Footer'
import {
  Wrapper,
  InnerWrapper,
  QRCodePic,
  Title,
  DescWrapper,
  UL,
  LI,
  Focus,
} from './styles/groups'

type TProps = {
  qr: string
}

export const INGroup: FC<TProps> = ({ qr }) => {
  const [mask, setMask] = useState(true)

  return (
    <Wrapper>
      <InnerWrapper>
        <QRCodePic src={qr} noLazy mask={mask} />
        <DescWrapper>
          <Title>进群须知：</Title>
          <UL>
            <LI>
              本群内<Focus>仅限于</Focus>讨论和「CoderPlanets」相关的话题。
            </LI>
            <LI>
              除自我介绍外，在本群内<Focus>摸鱼吹水等同于自我退群声明</Focus>。
            </LI>
            <LI>
              本群<Focus>不欢迎潜水</Focus>
              ，每月会不定期清理潜水人员以保持低水位，请确保你对本社区有持续的兴趣。
            </LI>
            <LI>
              群内有价值的内容会<Focus>定期同步</Focus>
              到反馈建议子社区，你不会因为不在群里而错过任何有价值的内容。
            </LI>
          </UL>
        </DescWrapper>
      </InnerWrapper>
      <Footer onConfirm={() => setMask(false)} mask={mask} />
    </Wrapper>
  )
}

// 雷达站
export const RGroup: FC<TProps> = ({ qr }) => {
  const [mask, setMask] = useState(true)

  return (
    <Wrapper>
      <InnerWrapper>
        <QRCodePic src={qr} noLazy mask={mask} />
        <DescWrapper>
          <Title>进群须知：</Title>
          <UL>
            <LI>
              本群内<Focus>仅限于</Focus>
              讨论信息（源）搜集等「雷达」相关的话题。
            </LI>
            <LI>
              除自我介绍外，在本群内<Focus>摸鱼吹水等同于自我退群声明</Focus>。
            </LI>
            <LI>
              本群<Focus>不欢迎潜水</Focus>
              ，每月会不定期清理潜水人员以保持低水位，请确保你对本社区有持续的兴趣。
            </LI>
            <LI>
              群内有价值的内容会<Focus>定期同步</Focus>
              到各个社区的雷达版块，你不会因为不在群里而错过任何有价值的内容。
            </LI>
          </UL>
        </DescWrapper>
      </InnerWrapper>
      <Footer onConfirm={() => setMask(false)} mask={mask} />
    </Wrapper>
  )
}
