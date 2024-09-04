import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
            exports: 'named'
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            exports: 'named'
        }
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        terser({
            compress: {
                dead_code: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                booleans: true,
                loops: true,
                unused: true,
                hoist_funs: true,
                keep_fargs: false,
                hoist_vars: true,
                if_return: true,
                join_vars: true,
                side_effects: true,
                warnings: false
            },
            mangle: true,
            format: {
                comments: false
            }
        })
    ]
};