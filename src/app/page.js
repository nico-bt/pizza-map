"use client"

import "leaflet/dist/leaflet.css"
import { useRef, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { pizzerias } from "@/data/pizzerias"
import Header from "@/components/Header"
import ListadoPizzerias from "@/components/ListadoPizzerias"
import MarkersPizzerias from "@/components/MarkersPizzerias"

export default function Home() {
  const [isListVisible, setIsListVisible] = useState(false)
  const markersRef = useRef(Array(pizzerias.length).fill(null))

  const openItemPopUp = (id) => {
    if (markersRef.current[id]) {
      markersRef.current[id].openPopup()
    }
  }

  return (
    <>
      <Header />

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
    </>
  )
}
