import React from 'react'

const html =
  '<div class="cps-viewer"><h2>Editor.js</h2><p>Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.</p><h3>Key features</h3><ul><li>It is a block-styled editor</li><li>It returns clean data output in JSON</li><li>Designed to be extendable and pluggable with a simple API</li></ul><h3>Key features</h3><ol><li>It is a block-styled editor</li><li>It returns clean data output in JSON</li><li>Designed to be extendable and pluggable with a simple API</li></ol><h3>What does it mean «block-styled editor»</h3><div class="cps-viewer-checklist"><div>This is a block-styled editor</div><div>Clean output data</div><div>Simple and powerful API</div></div><p>Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.</p><p>There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.</p><h3>What does it mean clean data output</h3><p>Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below</p><p>Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.</p><p>Clean data is useful to sanitize, validate and process on the backend.</p><div class="cps-viewer-delimiter"></div><p>We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it\'s core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏</p><div class="cps-viewer-image"><img src="https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg" /></div><div class="cps-viewer-linker"><a href="https://www.github.com">https://www.github.com</a></div><div class="cps-viewer-quote">quote demo text</div><div>'

const Editor = () => {
  return (
    <div
      style={{
        border: '1px solid lightgrey',
        width: '800px',
        margin: '10% 20%',
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  )
}

export default Editor
