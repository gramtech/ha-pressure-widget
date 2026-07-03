import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
  input: 'src/analog-barometer-card.ts',
  output: {
    file: 'dist/analog-barometer-card.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [resolve(), json(), typescript({ outDir: 'dist', declaration: false }), terser()],
};
