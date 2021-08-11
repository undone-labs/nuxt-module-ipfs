# Nuxt Module for IPFS Gateway Routing

## Overview

A Nuxt module that enables nuxt routing for both the intended path and IPFS gateway URLs, which include a CID (hash) of the asset.

Enabling this plugin for Nuxt in **static mode** will allow resources, including pages, to be accessible via 3 different route structures:

- `foo.com/`
- `gateway.ipfs.io/ipfs/Qma....AbFd/`
- `ipfs.io/ipns/foo.com/`

Subsequently, resources and other pages automatically use paths relative to those bases:
- `foo.com/bar.png`
- `gateway.ipfs.io/ipfs/Qma....AbFd/bar.png`
- `ipfs.io/ipns/foo.com/bar.png`

or
- `foo.com/style.css`
- `gateway.ipfs.io/ipfs/Qma....AbFd/style.css`
- `ipfs.io/ipns/foo.com/style.css`

## Installation

_`npm` package coming soon. Manual installation required for now._

1. Download this repo, extract it and put the resulting folder into your `modules` directory in your Nuxt project
2. Add `target: 'static'` and `router.base` to your `nuxt.config.js`
3. Add the module folder name to the `modules` array in `nuxt.config.js`

**nuxt.config.js**
```js
export default {
  target: 'static',
  modules: [
    '~/modules/nuxt-module-ipfs'
  ],
  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/ipfs/hash/'
  }
}
```

## Usage

_Support for the `assets` directory potentially coming in the future_

All image assets must be placed in the `static` directory, _not_ the `assets` directory and must be wrapped using the included `$relativity()` (including a starting forward slash) global method as outlined below:

**component.vue**
```vue
<template>
  <img :src="$relativity('/images/duck.jpg')" />
</template>
```

## Additional Cases
_To be added_

#### Canonicalization and SEO
Additionally, it may be useful in the future to add a canonicalization option, to semantically declare one page as a duplicate of the other, and direct third party entities like bots to the correct resource. This would be accomplished by injecting a tag into `<head>` of the version that is considered secondary, which would look like

```html
<link rel="canonical" href="foo.com/bar" />
```

Since IPFS gateway URLs were an older (and by some standards _legacy_) implementation, this tag would typically be added to the IPFS Gateway URLs only.

## Roadmap
- [ ] Add checker for `target: static`
- [ ] Construct and inject `rel="canonical"` tag
- [ ] Make the favicon path relative and working on all URL structures
- [ ] Make `200.html` path relative
