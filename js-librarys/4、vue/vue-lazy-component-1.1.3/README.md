# Vue Lazy Component

[![npm](https://img.shields.io/npm/v/@xunlei/vue-lazy-component.svg)](https://www.npmjs.com/package/@xunlei/vue-lazy-component)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Git flow work flow](https://img.shields.io/badge/git--flow-workflow-brightgreen.svg)](https://github.com/nvie/gitflow/)
[![GitHub stars](https://img.shields.io/github/stars/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/issues)
[![GitHub forks](https://img.shields.io/github/forks/xunleif2e/vue-lazy-component.svg)](https://github.com/xunleif2e/vue-lazy-component/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/xunleif2e/vue-lazy-component/master/LICENSE)

> 🐌 Vue.js 2.x 组件级懒加载方案

## [English version documentation](README.en.md)


## 特性

- 支持 组件可见或即将可见时懒加载
- 支持 组件延时加载
- 支持 加载真实组件前展示骨架组件，提高用户体验
- 支持 真实组件代码分包异步加载

## 安装 / Installation

```
npm install @xunlei/vue-lazy-component
```

## 在线demo / Online demo

https://xunleif2e.github.io/vue-lazy-component/demo/dist/index.html

## 使用

### 1. 注册组件

#### 方式1 利用插件方式全局注册

```javascript
import VueLazyComponent from '@xunlei/vue-lazy-component'
import Vue from 'vue'

Vue.use(VueLazyComponent)
```

#### 方式2 局部注册

```javascript
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

export default {
  // ...
  components: {
    'vue-lazy-component': VueLazyComponent
  }
}
```

#### 方式3 独立版本引入，自动全局注册

> 前提是 vue 也是独立版本通过script标签引入

```html
<script src="https://unpkg.com/@xunlei/vue-lazy-component@1.0.7/dist/vue-lazy-component.js"></script>
```

### 2. 模版语法

```html
 <vue-lazy-component
  @init="init"
  @beforeInit="beforeInit"
 >
  <!-- real component-->
  <st-series-sohu/>
  <!-- skeleton component -->
  <st-series-sohu-skeleton slot="skeleton"/>
</vue-lazy-component>
```

## Props

| 参数                    | 说明  | 类型 | 可选值 | 默认值 |
|-------------------------|-------|------|--------|--------|
| viewport | 组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器 | HTMLElement | true      | `null`，代表视窗 |
| direction | 视口的滚动方向, `vertical`代表垂直方向，`horizontal`代表水平方向  | String | true      | `vertical` |
| threshold | 预加载阈值, css单位  | String | true      | `0px` |
| tagName | 包裹组件的外层容器的标签名  | String | true  | `div` |
| timeout | 等待时间，如果指定了时间，不论可见与否，在指定时间之后自动加载  | Number | true    | - |

## Events

| 事件名                    | 说明  | 事件参数
|-------------------------|-------|------|
| before-init | 模块可见或延时截止导致准备开始加载懒加载模块 | - |
| init | 开始加载懒加载模块，此时骨架组件开始消失 | - |
| before-enter | 懒加载模块开始进入 | el |
| before-leave | 骨架组件开始离开 | el |
| after-leave | 骨架组件已经离开 | el |
| after-enter | 懒加载模快已经进入 | el |
| after-init | 初始化完成 | - |

## 注意 / Notes

> 1. 该项目依赖 [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)，如需在较低版本浏览器运行，需要引入 **IntersectionObserver API polyfill**

### IntersectionObserver API polyfill

https://github.com/w3c/IntersectionObserver/tree/master/polyfill


> 2. webpack 分包异步加载方式依赖 `Scoped Component Slots`, 需要 Vue 版本大于2.1.0


- https://cn.vuejs.org/v2/guide/components.html#作用域插槽

## Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo

# commit use commitizen
npm run commit

# pre publish
npm run prepublish

# generate changelog
npm run changelog
```

## Roadmap

- [x] SSR 支持 @ v1.1.0

- [ ] UI单元测试 @ v1.2.0

- [ ] 减少性能开销 @ v1.3.0

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 XunleiF2E
