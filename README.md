# Nuxt Plugin for IPFS Routing

## Overview

A Nuxt module that enables nuxt routing for both the intended path and IPFS gateway URLs, which include a CID (hash) of the asset.

Enabling this plugin for Nuxt in **static mode** will allow resources, including pages, to be accessible via two routes. For example:

- `foo.com/`
- `gateway.ipfs.io/ipfs/Qma....AbFd/`

Subsequently, resources and other pages use paths relative to those bases:

- `foo.com/bar`
- `gateway.ipfs.io/ipfs/Qma....AbFd/bar`

- `foo.com/style.css`
- `gateway.ipfs.io/ipfs/Qma....AbFd/style.css`

## Installation

_`npm` package coming soon. Manual installation required for now._

1. Download this repo, extract it and put the resulting folder into your `modules` directory in your Nuxt project
2. Add `target: 'static'` to your `nuxt.config.js`
3. Add the module folder name to the `modules` array in `nuxt.config.js`

**nuxt.config.js**
```js
export default {
  target: 'static',
  modules: [
    '~/modules/nuxt-plugin-ipfs'
  ]
}
```

## Usage

_Support for the `assets` directory potentially coming in the future_

All image assets must be placed in the `static` directory, _not_ the `assets` directory.

All links and image assets must be wrapped using the included `$relativity()` global method.

**component.vue**
```vue
<template>
  <nuxt-link :to="$relativity('/duck')">
    <img :src="$relativity('/images/duck.jpg')" />
  </nuxt-link>
</template>
```

## Additional Cases
_To be added_

## TO DO
- [ ] Update hook to clear `WARN` message: `render:routeContext(nuxt) is deprecated, Please use vue-renderer:ssr:context(context)`
- [ ] Add checker for `target: static`
- [ ] Add checker for `publicPath` and `router.base` (values _cannot_ be set in `nuxt.config.js`)
