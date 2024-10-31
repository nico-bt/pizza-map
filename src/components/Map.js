"use client"

import "leaflet/dist/leaflet.css"
import { useRef, useState } from "react"
import { pizzerias } from "@/data/pizzerias"
import { MapContainer, TileLayer } from "react-leaflet"
import ListadoPizzerias from "@/components/ListadoPizzerias"
import MarkersPizzerias from "@/components/MarkersPizzerias"

function Map() {
  const [isListVisible, setIsListVisible] = useState(false)
  const markersRef = useRef(Array(pizzerias.length).fill(null))

  const openItemPopUp = (id) => {
    if (markersRef.current[id]) {
      markersRef.current[id].openPopup()
    }
  }

  return (
    <MapContainer
      center={[-34.59395585059586, -58.41437538769088]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[650px] z-0 relative mt-6 mb-16"
    >
      <ListadoPizzerias
        pizzerias={pizzerias}
        setIsListVisible={setIsListVisible}
        isListVisible={isListVisible}
        openItemPopUp={openItemPopUp}
      />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkersPizzerias pizzerias={pizzerias} markersRef={markersRef} />
    </MapContainer>
  )
}

export default Map
