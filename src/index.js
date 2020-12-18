// tree shaking not work because of vuex.mjs
import {Store} from 'vuex'
// tree shaking work
// import {Store} from 'vuex/dist/vuex.esm-bundler.js'

console.log(Store)