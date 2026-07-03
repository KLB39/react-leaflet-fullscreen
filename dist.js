'use strict';

var L = require('leaflet');
require('leaflet.fullscreen');
var react = require('react');
var reactLeaflet = require('react-leaflet');

function removeFullscreenControl(control, map) {
    const container = control.getContainer?.();
    const zoomContainer = map.zoomControl?.getContainer?.() ?? map.zoomControl?._container;
    const isInsideZoomControl = container && zoomContainer && container === zoomContainer;

    map.off('enterFullscreen exitFullscreen', control._toggleState, control);

    if (isInsideZoomControl) {
        control.onRemove?.(map);
        control.link?.remove?.();
        map.off('unload', control.remove, control);
        control._map = null;
        return;
    }

    control.remove();
}

function FullscreenControl(props) {
    const map = reactLeaflet.useMap();
    const ctrl = react.useRef(null);

    if (ctrl.current === null) {
        ctrl.current = L.control.fullscreen(props);
    }

    react.useEffect(() => {
        const control = ctrl.current;
        control.addTo(map);

        return () => {
            removeFullscreenControl(control, map);
        };
    }, [map]);

    return null;
}

exports.FullscreenControl = FullscreenControl;
