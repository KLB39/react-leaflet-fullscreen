import L from 'leaflet';
import "leaflet.fullscreen"
import { useRef, useEffect } from "react";
import { useMap } from "react-leaflet";

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

export function FullscreenControl(props) {
    const map = useMap();
    const ctrl = useRef(null);

    if (ctrl.current === null) {
        ctrl.current = L.control.fullscreen(props);
    }

    useEffect(() => {
        const control = ctrl.current;
        control.addTo(map);

        return () => {
            removeFullscreenControl(control, map);
        };
    }, [map]);

    return null;
}

