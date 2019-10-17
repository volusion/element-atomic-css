import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/element-atomic-css.js',
        name: 'elementAtomicCss',
        format: 'umd',
    },
    plugins: [ resolve() ]
}
