import { createGlobalStyle } from 'styled-components'

import { theme } from '@utils'

// move ant style to seperate file
const CustomOverWrite = createGlobalStyle`
  .react-calendar-heatmap rect:hover {
    stroke: ${theme('heatmap.borderHover')};
  }

  .react-calendar-heatmap-month-label {
    fill: ${theme('heatmap.monthLabel')};
    font-size: 0.7em;
  }
  .banner-heatmap {
    .react-calendar-heatmap-month-label {
      fill: ${theme('bannerHeatmap.monthLabel')};
      font-size: 0.7em;
    }
  }

  .react-calendar-heatmap .color-scale-1 {
    fill: ${theme('heatmap.scale_1')};
  }
  .react-calendar-heatmap .color-scale-2 {
    fill: ${theme('heatmap.scale_2')};
  }
  .react-calendar-heatmap .color-scale-3 {
    fill: ${theme('heatmap.scale_3')};
  }
  .react-calendar-heatmap .color-scale-4 {
    fill: ${theme('heatmap.scale_4')};
  }
  .react-calendar-heatmap .color-scale-5 {
    fill: ${theme('heatmap.scale_5')};
  }
  .react-calendar-heatmap .color-empty {
    fill: ${theme('heatmap.empty')};
  }
  .comment-editor {
    .public-DraftEditor-content {
      min-height: 150px;
      font-size: 1rem;
      color: ${theme('editor.content')};
    }
  }
  .comment-reply-editor {
    font-size: 0.8rem;

    .public-DraftEditor-content {
      min-height: 200px;
      color: ${theme('editor.content')};
    }
  }

  .public-DraftEditor-content {
    min-height: 500px;
    font-size: 1.3em;
    color: ${theme('editor.content')};
  }
`

export default CustomOverWrite
