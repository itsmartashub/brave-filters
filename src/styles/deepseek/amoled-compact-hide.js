export default {
  name: 'DeepSeek - AMOLED x chatbox transparentish x compact chatbox buttons x hide footer',

  domains: [
    'chat.deepseek.com',
  ],

  css: `
    :root {
      --bg-chatbox: rgba(37, 37, 37, .5);
      --filter: blur(22px) saturate(2);
    }

    body[data-ds-dark-theme] {
      --dsw-alias-bg-base: black !important;
      --dsw-specific-sidebar-fill: black !important;

      & ._77cefa5 {
        backdrop-filter: var(--filter);
        background: var(--bg-chatbox) !important;
      }
    }

    /* hide footer */
    ._0fcaa63 {
      opacity: 0;
      padding: 0 !important;
    }

    /* chatbox compact */
    ._77cefa5 {
      /* chatbox toggle buttons */
      ._6dbc175 {
        display: none !important;
      }

      /* chatbox textarea */
      ._27c924,
      .b13855df {
        min-height: 0 !important;
      }
    }
  `,
}
