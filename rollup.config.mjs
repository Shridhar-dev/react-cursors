import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
export default {

    input: './src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
        }
    ],
    plugins: [
        resolve({
            extensions: [".js", ".jsx"]
        }),
        postcss({
            plugins: [],
            minimize: true,
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        external(),
        terser(),
    ]
}
