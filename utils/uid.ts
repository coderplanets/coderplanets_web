import { customAlphabet } from 'nanoid'

// avoid special chars like -,. etc in ids
// those chars may be used as spliter
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 6)

const uid = {
  gen: (): string => nanoid(),
}

export default uid
