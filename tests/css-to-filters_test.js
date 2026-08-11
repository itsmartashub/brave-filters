import { assertEquals } from 'jsr:@std/assert'

import { cssToFilters } from '../build/css-to-filters.js'

Deno.test('converts basic declarations', async () => {
  const filters = await cssToFilters(
    `
      .foo {
        color: red;
        background: black !important;
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.foo:style(color: red; background: black !important)',
  ])
})

Deno.test('preserves important declarations', async () => {
  const filters = await cssToFilters(
    `
      .foo {
        color: red !important;
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.foo:style(color: red !important)',
  ])
})

Deno.test('flattens nested selectors', async () => {
  const filters = await cssToFilters(
    `
      .parent {
        .child {
          color: red;
        }
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.parent .child:style(color: red)',
  ])
})

Deno.test('handles selector lists', async () => {
  const filters = await cssToFilters(
    `
      .foo,
      .bar {
        color: red !important;
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.foo:style(color: red !important)',
    'example.com##.bar:style(color: red !important)',
  ])
})

Deno.test('handles multiple domains', async () => {
  const filters = await cssToFilters(
    `
      .foo {
        display: none !important;
      }
    `,
    [
      'example.com',
      'example.org',
    ],
  )

  assertEquals(filters, [
    'example.com##.foo:style(display: none !important)',
    'example.org##.foo:style(display: none !important)',
  ])
})

Deno.test('normalizes multiline CSS values', async () => {
  const filters = await cssToFilters(
    `
      .foo {
        background: oklch(
          from var(--brand)
          l c h / 0.25
        ) !important;
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.foo:style(background: oklch(from var(--brand) l c h / 0.25) !important)',
  ])
})

Deno.test('preserves custom properties', async () => {
  const filters = await cssToFilters(
    `
      :root {
        --primary: #000 !important;
        --secondary: var(--primary);
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##:root:style(--primary: #000 !important; --secondary: var(--primary))',
  ])
})

Deno.test('deduplicates identical filters', async () => {
  const filters = await cssToFilters(
    `
      .foo {
        color: red;
      }

      .foo {
        color: red;
      }
    `,
    ['example.com'],
  )

  assertEquals(filters, [
    'example.com##.foo:style(color: red)',
  ])
})
