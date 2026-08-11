export default {
  name: 'Daily.dev - Increase widths for feed in list view',

  domains: [
    'daily.dev',
  ],

  css: `
      main[class*="utilities_pageContainer_"] {
        max-width: 1024px !important;
      }
  `,
}
