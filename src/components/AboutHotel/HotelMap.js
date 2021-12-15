import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// ICONS
import { RiMap2Line } from 'react-icons/ri';

// IMAGES
import mapIcon from '@Images/map-marker-alt-solid.svg';

// CUSTOM MAP MARKER
const mapMarker = L.icon({
  iconUrl: mapIcon,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12.5, 31], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 60] // point from which the popup should open relative to the iconAnchor
});

// MAPBOX API
const MAPBOX_USER = 'leotx';
const MAPBOX_STYLE_KEY = 'ckvll69ex2gx314o21mheevdi';
const MAPBOX_MAP_SIZE = '256';
const MAPBOX_TOKEN = 'pk.eyJ1IjoibGVvdHgiLCJhIjoiY2t2bGxjczNlOWU0dDJwcGc2d3N6aWNpZSJ9.nF9CvDoQ0u1KTjIKUpZxAw';
const MAPBOX_API = `https://api.mapbox.com/styles/v1/${MAPBOX_USER}/${MAPBOX_STYLE_KEY}/tiles/${MAPBOX_MAP_SIZE}/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`;

// COMPONENTS
const PopupLink = styled.a`
  display: flex;
  align-items: center;
  span {
    color: ${({colors: c}) => c.defaultText};
    font-size: ${({fontSize: fs}) => fs.xsm};
    margin-left: .8rem;
  }
`

const MapFooter = styled.footer`
  padding: 1.6rem;
  background: ${({colors: c}) => c.bgSecondary};
  border-radius: 0 0 5px 5px;
  color: ${({colors: c}) => c.defaultText}; 
  font-size: ${({fontSize: fs}) => fs.sm};
  font-family: 'Poppins';
`

const HotelMap = ({colors: c, fontSize: fs, data}) => {
  const { address, coordinates, fullMapURL } = data;

  return (
    <div>
      <MapContainer 
        className='map'
        attributionControl={false}
        zoomControl={false}
        center={coordinates}
        zoom={15}
        scrollWheelZoom={true}
        style={{height: '150px', borderRadius: '5px 5px 0 0'}}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={MAPBOX_API}
      />
        <Marker 
          icon={mapMarker} 
          position={coordinates}
        >
          <Popup closeButton={false}>
            <PopupLink href={fullMapURL} colors={c} fontSize={fs}>
              <RiMap2Line color={c.lightText} size={18}/>
              <span>Visualizar no Mapa</span>
            </PopupLink>
          </Popup>
        </Marker>
      </MapContainer>
      <MapFooter fontSize={fs} colors={c}>
        <p>{address}</p>
      </MapFooter>
    </div>
  )
}

export default HotelMap;