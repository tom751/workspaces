import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      include: ['src/components/**/*.spec.ts'],
      name: 'components',
      environment: 'jsdom',
      setupFiles: ['./src/test-setup.ts']
    }
  },
  {
    test: {
      include: ['src/utils/**/*.spec.ts'],
      name: 'node',
      environment: 'node'
    }
  }
])