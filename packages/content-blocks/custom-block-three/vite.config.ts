import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'custom-block-three',
      fileName: 'custom-block-three',
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      clearPureImport: true,
    }),
  ],
});