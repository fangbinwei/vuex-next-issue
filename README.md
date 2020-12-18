# vue-next-issue

### Steps to reproduce
1. yarn build
2. search `prev state` in dist/main.js to validate if bundle contains `createLogger`

**main.js**
```js
// tree shaking not work because of vuex.mjs
import {Store} from 'vuex'

console.log(Store)
```
output(external vue)
```bash
[webpack-cli] Compilation finished
asset main.js 12.1 KiB [emitted] [minimized] (name: main) 2 related assets
orphan modules 400 bytes [orphan] 1 module
runtime modules 221 bytes 1 module
built modules 35.6 KiB [built]
  ./src/index.js   1 modules 567 bytes [built] [code generated]
  ./node_modules/vuex/dist/vuex.cjs.js 35 KiB [built] [code generated]
  external "Vue" 42 bytes [built] [code generated]
webpack 5.11.0 compiled successfully in 713 ms
✨  Done in 3.59s.
```

**main.js**
```js
// tree shaking work
import {Store} from 'vuex/dist/vuex.esm-bundler.js'

console.log(Store)
```
output(external vue)

```bash
[webpack-cli] Compilation finished
asset main.js 9.8 KiB [emitted] [minimized] (name: main) 2 related assets
orphan modules 35.1 KiB [orphan] 2 modules
runtime modules 221 bytes 1 module
./src/index.js   2 modules 35.3 KiB [not cacheable] [built] [code generated]
webpack 5.11.0 compiled successfully in 797 ms
✨  Done in 2.47s.
```