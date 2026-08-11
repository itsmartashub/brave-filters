export default {
  name: 'Qwen - AMOLED x blue-ish user bubble',

  domains: [
    'chat.qwen.ai',
  ],

  css: `
    html.dark {
      --container-primary-bgweb: #000 !important;
      --container-secondary-bgweb: #000 !important;
      --line-secondary-border: #111111 !important;
    }

    .message-input-wrapper .message-input-container {
      background: rgba(37, 37, 37, .6) !important;
    }

    .chat-user-message {
      background: oklch(
        from var(--character-brandprimary-text)
        l c h / 0.25
      ) !important;
    }
  `,
}
