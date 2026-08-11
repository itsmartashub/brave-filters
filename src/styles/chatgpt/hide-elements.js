export default {
  name: 'ChatGPT - Hide elements',

  domains: [
    'chatgpt.com',
  ],

  css: `
    [data-testid="model-switcher-dropdown-button"],
    [data-testid="share-chat-button"],
    [data-testid="thread-disclaimer"] {
            display: none !important;
    }

    header button.button-glimmer-cta,
    .__menu-item[data-testid="accounts-profile-button"]~div>button.h-8.w-full.bg-token-bg-primary,
    .__menu-item[data-testid="accounts-profile-button"] button[data-trailing-button] {
            display: none !important;
    }
  `,
}
