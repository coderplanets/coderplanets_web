import { FC, memo } from 'react'

import type { TJob, TID, TC11N } from '@/spec'
import JobItem from '@/components/JobItem'
import MasonryCards from '@/components/MasonryCards'

type TProps = {
  entries: TJob[]
  activeId: TID | null
  c11n: TC11N
}

const JobsList: FC<TProps> = ({ entries, activeId, c11n }) => {
  return (
    <MasonryCards column={2}>
      {entries.map((entry) => (
        <JobItem key={entry.id} entry={entry} activeId={activeId} c11n={c11n} />
      ))}
    </MasonryCards>
  )
}

export default memo(JobsList)
