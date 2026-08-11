export default {
  name: ' Daily.dev - AMOLED',

  domains: [
    'daily.dev',
  ],

  css: `
    @media (prefers-color-scheme: dark) {
        html.auto, html.auto .invert .invert {
          --theme-background-default: #000000 !important;
          --theme-background-subtle: #000000 !important;
          --theme-border-bolder-quaternary: color-mix(in srgb, var(--theme-border-bolder-primary), transparent 82%) !important;
          --theme-border-subtlest-secondary: color-mix(in srgb, var(--theme-border-subtlest-primary), transparent 70%) !important;
          --theme-blur-blur-baseline: color-mix(in srgb, #000000, transparent 12%) !important
        }
    }
  `,
}
