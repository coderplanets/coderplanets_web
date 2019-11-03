/**
 *
 * embed.ly custom styles, those styles only works in paid user of embed.ly
 * see details in: https://docs.embed.ly/docs/cards
 *
 */
const getEmbedHeadStyle = themeData => {
  const {
    providerName,
    title,
    digest,
    selectionBg,
    selectionFg,
    link,
    linkHover,
  } = themeData.richEditor.embed

  return `
    .embedly-card {
      padding-top: 6px;
    }

    .ui-widget-content {
      display: none !important;
    }

    .embedly-card-hug {
      margin-bottom: 0;
    }

    .card .title {
      margin-top: 15px;
    }
    .card .title a {
      color: ${title};
    }
    .card .description {
      color: ${digest};
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .card .action {
      color: ${link};
    }
    .card .meta .meta-txt a:hover, .card .action:hover, .modal-container .preview-overlay-txt:hover, .modal-container .reset-embed-btn:hover, .modal-container .code-txt-label a:hover, .modal-container .services-list li a:hover, .modal-container .resources-list li a:hover, .slideshow .action:hover {
      color: ${linkHover};
    }
    .card .provider-name {
      color: ${providerName};
    }
    .no-touch .card .provider-name:hover, .touch .card .provider-name {
      border-bottom: 1px dotted ${providerName};
    }
    ::selection {
      background: ${selectionBg};
      color: ${selectionFg};
    }
  `
}

export default getEmbedHeadStyle
