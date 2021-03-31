/*
 *
 * 🔌 [Plugin | NuxtPluginIpfs] Methods
 *
 */

console.log(`🔌 [Plugin | NuxtPluginIpfs] Methods`)

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = (path) => {
  if (process.env.NODE_ENV !== 'development') {
    return `/relativity/${path.charAt(0) === '/' ? path.slice(1) : path}`
  }
  return path
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}
