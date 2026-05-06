const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')
const storybook = require('eslint-plugin-storybook')

module.exports = [
  {
    ignores: [
      '.netlify/**',
      '.next/**',
      '.yarn/**',
      'out/**',
      'build/**',
      'storybook-static/**',
      'public/**',
      'next-env.d.ts',
    ],
  },
  ...nextCoreWebVitals,
  ...storybook.configs['flat/recommended'],
]
