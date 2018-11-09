# @tufan/node-starter

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/tufan/node-starter)](https://www.npmjs.com/package/tufan/node-starter)
[![travis status](https://img.shields.io/travis/tufan-io/node-starter.svg)](https://travis-ci.org/tufan-io/node-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/tufan-io/node-starter)
[![Coverage Status](https://coveralls.io/repos/github/tufan-io/node-starter/badge.svg?branch=master)](https://coveralls.io/github/tufan-io/node-starter?branch=master)
[![David](https://david-dm.org/tufan-io/node-starter/status.svg)](https://david-dm.org/tufan-io/node-starter)
[![David](https://david-dm.org/tufan-io/node-starter/dev-status.svg)](https://david-dm.org/tufan-io/node-starter?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/tufan/node-starter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tufan/node-starter/)
<!-- endbadge -->

A simple, full-functionality starter package for node modules, built in TypeScript.

The goal is to be simple, lean and automated.

- minimize dependencies.
- use simpler-to-understand dependencies when necessary.
- enable a move-fast mindset.

Support for the following is baked in:

- [x] [tslint](https://github.com/palantir/tslint)
- [x] build automation
- [x] [ava](https://github.com/avajs/ava) test-automation
- [x] test coverage (remapped to TypeScript)
- [x] checks dependencies for known vulnerabilities before commit.
- [x] CI integration
- [x] Code-of-conduct
- [x] Semantic Release

## Usage

```bash
git clone https://github.com/tufan-io/node-starter my-app
cd my-app
npm install
```

Since we are using a git repo as a template, a little reconfiguration is
required. This has been encapsulated into a simple node pre-install script -
[.reinit](./.reinit). The script destroys itself after execution, giving
your spanking new project a clean start.

```bash
node ./.reinit
```

At this point, explore `./src` for the bare bones example.
Typically, you'd want to modify `./src/index.ts` to get started.

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
