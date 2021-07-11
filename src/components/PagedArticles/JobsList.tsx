import { FC, memo } from 'react'

import type { TJob, TID } from '@/spec'
import JobItem from '@/components/JobItem'
import MasonryCards from '@/components/MasonryCards'

type TProps = {
  entries: TJob[]
  activeId: TID | null
}

const JobsList: FC<TProps> = ({ entries, activeId }) => {
  return (
    <MasonryCards column={2}>
      {entries.map((entry) => (
        <JobItem key={entry.id} entry={entry} activeId={activeId} />
      ))}
    </MasonryCards>
  )
}

export default memo(JobsList)
