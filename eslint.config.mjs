import jsLint from "@eslint/js";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import tsLint from "typescript-eslint";

export default [
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
      prettier: prettier,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "prettier/prettier": "error",
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["block-like", "break", "return"],
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
    },
    ignores: ["webpack.config.mjs"],
  },
];
