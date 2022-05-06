import { FC, memo, useCallback } from 'react'
import { pluck } from 'ramda'

import type { TID, TMenuOption, TArticle } from '@/spec'

import { SVG } from '@/constant'

import IconButton from '@/widgets/Buttons/IconButton'
import MenuButton from '@/widgets/Buttons/MenuButton'

import { Wrapper, Title, MenuWrapper } from '../styles/collapse/banner'

type TProps = {
  menuOptions: TMenuOption[]
  setOpenedIDs: (ids: TID[]) => void
  articles: TArticle[]
}

const Banner: FC<TProps> = ({ menuOptions, setOpenedIDs, articles }) => {
  const foldAll = useCallback(() => setOpenedIDs([]), [])
  const unFoldAll = useCallback(
    () => setOpenedIDs(pluck('id', articles)),
    [articles, setOpenedIDs],
  )

  const handleMenu = useCallback(
    (key) => {
      switch (key) {
        case 'fold': {
          return foldAll()
        }
        case 'unfold': {
          return unFoldAll()
        }

        default: {
          console.log('todo')
        }
      }
    },
    [foldAll, unFoldAll],
  )

  return (
    <Wrapper>
      <Title>常见问题</Title>
      <MenuWrapper>
        <MenuButton
          placement="bottom-end"
          options={menuOptions}
          onClick={(key) => handleMenu(key)}
        >
          <IconButton icon={SVG.MORE} />
        </MenuButton>
      </MenuWrapper>
    </Wrapper>
  )
}

export default memo(Banner)
