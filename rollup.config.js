import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/element-atomic-css.js',
        name: 'elementAtomicCss',
        format: 'umd',
    },
    // external: ['aphrodite'],
    plugins: [
    //     babel({
    //         babelrc: false,
    //         presets: [['env', { modules: false }], 'stage-1', 'react'],
    //         externalHelpers: true,
    //         exclude: ['node_modules/**']
    //     }),
        resolve(),
    //     commonjs(),
    //     options.minify && uglify()
    ]
}
