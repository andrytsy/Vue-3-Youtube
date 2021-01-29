module.exports = {
    root: true,
    env: {
        node: true,
	    es6: true
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
	    'vue/html-indent': ['error', 4],
	    'vue/script-indent': ['error', 4, {
		    baseIndent: 1,
		    switchCase: 1
	    }],
	    '@typescript-eslint/no-var-requires': 0,
	    'no-mixed-spaces-and-tabs': 0,
	    'no-tabs': 0
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
}
