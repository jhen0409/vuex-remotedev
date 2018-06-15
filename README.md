# vuex-remotedev [![NPM version](http://img.shields.io/npm/v/vuex-remotedev.svg?style=flat)](https://www.npmjs.com/package/vuex-remotedev) [![Build Status](https://travis-ci.org/jhen0409/vuex-remotedev.svg?branch=master)](https://travis-ci.org/jhen0409/vuex-remotedev)

> Inspecting vuex on [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) / [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

## Why?

Due to I'm interesting for [`Vue Native`](https://github.com/GeekyAnts/vue-native-core), it's framework allowed using Vue on React Native, we can keep using [React Native Debugger](https://github.com/jhen0409/react-native-debugger) for that, this is good reason to make [`Vuex`](https://github.com/vuejs/vuex) running on Redux DevTools, so I simply made this:

<img width="1360" alt="vuex-and-rn" src="https://user-images.githubusercontent.com/3001525/41462483-9844892e-70c5-11e8-8f4a-9d3cd8abc205.png">

> The todo app is based on [`ankitsinghania94/vue-native-todo-app`](https://github.com/ankitsinghania94/vue-native-todo-app)

## Usage

```js
import remotedev from 'vuex-remotedev'

remotedev(store)
```

## Development

```bash
$ yarn
$ yarn test
$ yarn build
```
