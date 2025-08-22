import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    reporters: ['junit'],
    outputFile: 'test-results.xml',

    
  },
})
