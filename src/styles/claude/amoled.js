export default {
  name: 'Claude - AMOLED x chatbox transparentish x accent-ish user bubble',

  domains: [
    'claude.ai',
  ],

  css: `
    :root {
      --c-black: #000;
      --bg-chatbox: rgba(37, 37, 37, .5);
      --bg-user-msg: hsla(from var(--cds-clay) h calc(s * 0.4) 15% / 1);
      --filter: blur(22px) saturate(2);
    }

    [data-mode="dark"] {
      --cds-surface-1: var(--c-black) !important;
      --cds-surface-3: #131313 !important;

      [data-chat-input-container="true"] fieldset .bg-surface-3 {
        --cds-surface-3: var(--bg-chatbox) !important;
        --tw-bg-opacity: 0.38 !important;
        backdrop-filter: var(--filter);
      }

      [data-cds="UserMessage"] .bg-neutral {
        background: var(--bg-user-msg, #131313) !important;
      }
    }
  `,
}
