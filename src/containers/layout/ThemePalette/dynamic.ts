import dynamic from 'next/dynamic'

export const NextNprogress = dynamic(() => import('nextjs-progressbar'), {
  ssr: false,
})

export const CodeSyxHighlight = dynamic(() => import('./CodeSyxHighlight'), {
  ssr: false,
})

export const RichEditorStyle = dynamic(() => import('./RichEditorStyle'), {
  ssr: false,
})
