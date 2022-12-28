/*
 * @Description:
 * @Author: Eden
 * @Date: 2022-12-23 15:06:57
 * @LastEditTime: 2022-12-27 16:33:14
 * @LastEditors: Eden
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // semi: 0,
    'prettier/prettier': [
      'off',
      {
        singleQuote: true
      }
    ]
  }
}
