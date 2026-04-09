import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.astro'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
]
