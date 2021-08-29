import { FC, memo } from 'react'

import type { TRadar, TID, TC11N } from '@/spec'
import RadarItem from '@/components/RadarItem'
import MasonryCards from '@/components/MasonryCards'

type TProps = {
  entries: TRadar[]
  activeId: TID | null
  c11n: TC11N
}

const RadarsList: FC<TProps> = ({ entries, activeId, c11n }) => {
  return (
    <MasonryCards column={2}>
      {entries.map((entry) => (
        <RadarItem
          key={entry.id}
          entry={entry}
          activeId={activeId}
          c11n={c11n}
        />
      ))}
    </MasonryCards>
  )
}

export default memo(RadarsList)
