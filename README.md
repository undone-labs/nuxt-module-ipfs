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

## Usage
_To be added_

## Additional Cases
_To be added_

## TO DO
- [] Update hook to clear `WARN` message: `render:routeContext(nuxt) is deprecated, Please use vue-renderer:ssr:context(context)`
- [] Add checker for `target: static`
- [] Add checker for `publicPath` and `router.base` (values _cannot_ be set in `nuxt.config.js`)
