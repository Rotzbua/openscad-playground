// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactCompiler from "eslint-plugin-react-compiler"
import pluginReact from "eslint-plugin-react"
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import js from '@eslint/js';
import {defineConfig} from 'eslint/config';

export default defineConfig(
    {
        files: ['**/*.{js,ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            // tseslint.configs.strict,
            // tseslint.configs.stylistic,
            // tseslint.configs.stylisticTypeChecked,
            // {...pluginReact.configs.flat.all, settings: {react: {version: "detect"}}},
            // reactCompiler.configs.recommended,
            // jsxA11y.flatConfigs.strict,
            // jsxA11y.flatConfigs.recommended,
        ],
    },
    // {
    //     files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    //     ...jsxA11y.flatConfigs.recommended,
    //     languageOptions: {
    //         ...jsxA11y.flatConfigs.recommended.languageOptions,
    //         globals: {
    //             ...globals.serviceworker,
    //             ...globals.browser,
    //         },
    //     },
    // },
    // },
);
