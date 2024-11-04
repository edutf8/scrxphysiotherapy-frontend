"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWQtd2FyZCIsImEiOiJjbHpnMWF2YW0xMXplMmtzOWoxNG1xc3N1In0.QqViudwIPy6bbn4NlpPoLw';

const Map = ({ coordinates, title }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: coordinates,
            zoom: 14,
            interactive: false,
        });

        new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(new mapboxgl.Popup().setText(title))
            .addTo(map.current);

        return () => map.current.remove(); // clean up map on component unmount
    }, [coordinates, title]);

    return (
        <div ref={mapContainer} className="w-full h-full" />
    );
};

export default Map;
