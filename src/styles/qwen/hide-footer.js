export default {
  name: 'Qwen - Hide footer',

  domains: [
    'chat.qwen.ai',
  ],

  css: `
    .chat-container-statement {
      opacity: 0 !important;
      padding: 0 !important;
    }
  `,
}
