export default {
  name: ' Daily.dev - Hide Advertise Cards',

  domains: [
    'daily.dev',
  ],

  css: `
      article:has(a[href="https://r.daily.dev/business"]) {
          display: none !important;
      }
  `,
}
