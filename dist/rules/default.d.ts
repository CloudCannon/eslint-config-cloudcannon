export const plugins: string[];
export namespace env {
    const es6: boolean;
    const node: boolean;
    const mocha: boolean;
    const browser: boolean;
    const commonjs: boolean;
}
export namespace parserOptions {
    const ecmaVersion: number;
}
export namespace globals {
    const Atomics: string;
    const SharedArrayBuffer: string;
}
export const rules: {
    'consistent-return': string;
    'no-param-reassign': string;
    strict: string;
    'no-console': string;
    'func-names': string;
    indent: string[];
    'no-tabs': (string | {
        allowIndentationTabs: boolean;
    })[];
    'comma-dangle': string[];
    'object-shorthand': string[];
    'prefer-arrow-callback': (string | {
        allowNamedFunctions: boolean;
        allowUnboundThis: boolean;
    })[];
    'no-bitwise': (string | {
        int32Hint: boolean;
    })[];
    "no-restricted-imports": (string | {
        paths: string[];
    })[];
    "no-restricted-modules": (string | {
        paths: string[];
    })[];
};
