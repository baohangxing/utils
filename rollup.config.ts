import path from 'path';
import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

const mainConfig = defineConfig({
  input: path.resolve(__dirname, 'src/index.ts'),
  plugins: [
    nodeResolve({
      extensions: ['.ts', '.js'],
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        include: [path.resolve(__dirname, 'src')],
      },
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }),
    commonjs(),
  ],
  external: [],
  output: [
    {
      dir: path.resolve(__dirname, 'lib'),
      format: 'cjs',
    },
    {
      dir: path.resolve(__dirname, 'es'),
      format: 'es',
      exports: 'named',
    },
  ],
});

export default defineConfig([mainConfig]);
