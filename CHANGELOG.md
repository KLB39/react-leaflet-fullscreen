# Changelog

## [4.2.1]

Updated `leaflet.fullscreen` support for the 5.x release line.

- Fixed React lifecycle handling to avoid re-adding the fullscreen control on every render.
- Fixed cleanup when the fullscreen button is attached to Leaflet's zoom control, so unmounting does not remove the zoom buttons.
- Added package typings entry and aligned `FullscreenOptions` with `leaflet.fullscreen` types.
- Declared direct peer dependencies for `leaflet`, `react`, and `react-leaflet`.
- Removed the unused `screenfull` dependency.
- Documented peer installation, mount-time option behavior, and the `fullscreenControl` double-button compatibility note.

## [4.2.0]

Updated for compatibility with leaflet.leaflet v5

## [4.0.1]

Updated for compatibility with react-leaflet v4
