import { FC, memo } from 'react'

import { ICON } from '@/config'
import IconButton from '@/widgets/Buttons/IconButton'
import MenuButton from '@/widgets/Buttons/MenuButton'
import Tooltip from '@/widgets/Tooltip'

import DetailInfo from './DetailInfo'
// import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import {
  Wrapper,
  Title,
  Name,
  FolderInfoPopWrapper,
  MenuWrapper,
  HintWrapper,
  AddHint,
} from './styles/footer'

const menuOptions = [
  {
    key: 'edit',
    icon: `${ICON}/edit/publish-pen.svg`,
    title: '编辑',
  },
  {
    key: 'lock',
    icon: `${ICON}/shape/lock.svg`,
    title: '加锁',
  },
]

type TProps = {
  title: string
  inactive: boolean
  onClick: () => void
  onMenuClick?: (key: string) => void
}

const Footer: FC<TProps> = ({ title, onClick, onMenuClick, inactive }) => {
  return (
    <Wrapper onClick={onClick}>
      <Title>
        {!inactive ? (
          <Tooltip
            delay={600}
            content={
              <FolderInfoPopWrapper>
                <DetailInfo />
              </FolderInfoPopWrapper>
            }
            noPadding
          >
            <Name>{title}</Name>
          </Tooltip>
        ) : (
          <Name>{title}</Name>
        )}

        {!inactive && (
          <MenuButton options={menuOptions} onClick={onMenuClick}>
            <MenuWrapper>
              <IconButton path="shape/more-l.svg" />
            </MenuWrapper>
          </MenuButton>
        )}
      </Title>
      <HintWrapper>
        {/* <LavaLampLoading size="small" /> */}
        {/* <Hint>已收入</Hint> */}
        <AddHint>已收入</AddHint>
      </HintWrapper>
    </Wrapper>
  )
}

export default memo(Footer)
