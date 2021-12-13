import sanitizeHtml from 'sanitize-html'

const countChinese = (str: string): number => {
  const m = str.match(/[\u4e00-\u9fff\uf900-\ufaff]/g)
  return !m ? 0 : m.length
}

const countLatinWords = (str: string): number => {
  return str.split(/\b\W+\b/).length
}

const sanitizeText = (text: string): string => {
  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  })
}

const parsePureTextForParagraph = ({ text }): string => {
  return sanitizeText(text)
}

const parsePureTextForList = ({ items }): string => {
  let preText = ''

  for (let i = 0; i < items.length; i += 1) {
    preText = preText.concat(sanitizeText(items[i].text))
  }
  return preText
}

/**
 * extract sanitized texts from editor papare for count
 */
const extractWords = (body: string): string => {
  // console.log('extractWords parse: ', JSON.parse(body))
  const { blocks } = JSON.parse(body)
  if (!blocks) return ''
  let pureText = ''

  for (let i = 0; i < blocks.length; i += 1) {
    const { type, data } = blocks[i]

    if (type === 'list') {
      pureText = pureText.concat(parsePureTextForList(data))
    }

    if (type === 'paragraph') {
      // extractParagraph
      pureText = pureText.concat(parsePureTextForParagraph(data))
    }
  }

  return pureText
}

export const countWords = (body: string): number => {
  const str = extractWords(body)
  if (str.length === 0) return 0

  return countChinese(str) + countLatinWords(str)
}

export const holder = 1
