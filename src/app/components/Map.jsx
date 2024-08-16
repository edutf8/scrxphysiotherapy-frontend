"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWQtd2FyZCIsImEiOiJjbHpnMWF2YW0xMXplMmtzOWoxNG1xc3N1In0.QqViudwIPy6bbn4NlpPoLw';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-1.0717329407634963, 50.806003718639204],
            zoom: 11.5,
        });

        const ravelin = new mapboxgl.Marker()
            .setLngLat([-1.0984100389059392, 50.792669006490684])
            .addTo(map.current);

        const alexandra = new mapboxgl.Marker()
            .setLngLat([-1.0874, 50.8241])
            .addTo(map.current);
    }, []);

    return (
        <div className="map-container" ref={mapContainer}></div>
    );
};

export default Map;
