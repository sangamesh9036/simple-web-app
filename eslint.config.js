const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

module.exports = [
    {
        ignores: ['node_modules'],
    },
    js.configs.recommended,
    ...compat.config({
        env: {
            node: true,
            es6: true,
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    }),
];
