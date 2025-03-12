import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import eslintParserTs from "@typescript-eslint/parser";

export default [
    {
        ignores: ["node_modules/", "dist/", "build/", "public/"],
        languageOptions: {
            parser: eslintParserTs,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": eslintPluginTs,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "react/react-in-jsx-scope": "off",
        },
    },
];
