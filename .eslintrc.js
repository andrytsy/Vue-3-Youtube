module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/no-var-requires': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-tabs': 0
    }
}
