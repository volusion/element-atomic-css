import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/element-atomic-css.mjs',
            format: 'esm',
        }
    ],
    plugins: [ resolve() ]
}
