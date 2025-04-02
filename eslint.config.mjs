import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript", 
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ),
    {
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/indent": ["error", 2],
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
      },
    },
];

export default eslintConfig;
