# 📦 Shopping Cart

Built using Typescript, Webpack and SASS.

## Installation

Clone this repo and start command below.

## Usage

### Development server

```bash
npm run serve
```

### Production

```bash
npm run build
```

You can change port in `webpack.config.js`.

```javascript
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
```


## Features

- [`Typescript`](https://typescriptlang.org/)
- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)

## Dependencies

### Typescript

- [`Typescript`](https://github.com/microsoft/TypeScript) - TypeScript is a language for application-scale JavaScript

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Loaders

- [`ts-loader`](https://github.com/TypeStrong/ts-loader) - TypeScript loader for webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template


## License

This project is open source and available under the [ISC](LICENSE).