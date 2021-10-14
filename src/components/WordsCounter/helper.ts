import sanitizeHtml from 'sanitize-html'

const countChinese = (str: string): number => {
  const m = str.match(/[\u4e00-\u9fff\uf900-\ufaff]/g)
  return !m ? 0 : m.length
}

const countEnglishWords = (str: string): number => {
  return str.split(/\b\W+\b/).length
}

const extractParagraph = ({ text }) => {
  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  })
}
const extractWords = (body: string): string => {
  // console.log('extractWords parse: ', JSON.parse(body))
  const { blocks } = JSON.parse(body)
  if (!blocks) return ''
  let textToCount = ''

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i]

    if (block.type === 'paragraph') {
      // extractParagraph
      textToCount = textToCount.concat(extractParagraph(block.data))
    }
  }

  // console.log('extract words: ', textToCount)
  return textToCount
}

export const countWords = (body: string): number => {
  const str = extractWords(body)
  if (str.length === 0) return 0

  return countChinese(str) + countEnglishWords(str)
}

export const holder = 1
