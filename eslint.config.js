import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
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
