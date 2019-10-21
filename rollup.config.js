import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/element-atomic-css.js',
            name: 'elementAtomicCss',
            format: 'umd',
        },
        {
            file: 'dist/element-atomic-css.mjs',
            format: 'esm',
        }
    ],
    plugins: [ resolve(), babel() ]
}
