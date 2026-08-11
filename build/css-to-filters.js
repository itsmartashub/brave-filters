import postcss from 'postcss'
import postcssNesting from 'postcss-nesting'

function normalizeSelector(selector) {
  return selector
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeValue(value) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .trim()
}

function serializeDeclarations(rule) {
  const declarations = []

  for (const node of rule.nodes ?? []) {
    if (node.type !== 'decl') {
      continue
    }

    const property = node.prop.trim()
    const value = normalizeValue(node.value)

    if (!property || !value) {
      continue
    }

    declarations.push(
      `${property}: ${value}${node.important ? ' !important' : ''}`,
    )
  }

  return declarations.join('; ')
}

function createFilters(rule, domains) {
  const declarations = serializeDeclarations(rule)

  if (!declarations) {
    return []
  }

  const selectors = rule.selectors ?? [rule.selector]

  return domains.flatMap(domain =>
    selectors.map(selector => {
      const normalizedSelector = normalizeSelector(selector)

      return `${domain}##${normalizedSelector}:style(${declarations})`
    }),
  )
}

export async function cssToFilters(css, domains) {
  const result = await postcss([
    postcssNesting(),
  ]).process(css, {
    from: undefined,
  })

  const filters = []

  result.root.walkRules(rule => {
    filters.push(
      ...createFilters(rule, domains),
    )
  })

  return [...new Set(filters)]
}
