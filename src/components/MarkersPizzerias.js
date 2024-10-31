import { Icon } from "leaflet"
import { Marker, Popup, useMap } from "react-leaflet"

const pizzaIcon = new Icon({
  iconSize: [30, 30],
  iconUrl: "/pizzaIcon.png",
})

function MarkersPizzerias({ pizzerias, markersRef }) {
  const map = useMap()

  const handleClickMarker = (latlng) => {
    map.flyTo([latlng.lat, latlng.lng], map.getZoom(), { animate: true })
  }

  return pizzerias.map((pizzeria) => (
    <Marker
      position={pizzeria.geocode}
      key={pizzeria.id}
      icon={pizzaIcon}
      ref={(el) => (markersRef.current[pizzeria.id] = el)}
      eventHandlers={{
        click: (e) => {
          handleClickMarker(e.target._latlng)
        },
      }}
    >
      <Popup>
        <h2 className="text-xl m-0">{pizzeria.nombre}</h2>
        <p className="!mt-1">{pizzeria.direccion}</p>
      </Popup>
    </Marker>
  ))
}

export default MarkersPizzerias
