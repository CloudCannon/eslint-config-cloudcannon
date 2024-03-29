# CloudCannon ESLint Config

Welcome to the CloudCannon ESLint config. This will ensure your code follows the CloudCannon linting definitions.


## Setting up

Install packages:

```
$ npm install eslint-config-cloudcannon eslint eslint-plugin-import eslint-plugin-mocha --save-dev
```

Create a new file on the root directory name ".eslintrc.json" with the following content:

```
{
    "extends": [
        "cloudcannon"
    ]
}
```

Add the linting scripts into the packages.json file with the paths to the folders containing the .js code:

```
    "lint-autofix": "eslint --fix lib/** config/** test/** application.js",
    "lint-code": "eslint  lib/** config/** test/** application.js",
    "lint": "npm run lint-autofix && npm run lint-code"
```

Run the `lint-code` script to check the current errors:

```
$ npm run lint-code
```
