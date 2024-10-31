"use client"
import Header from "@/components/Header"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Header />
      <Map />
    </>
  )
}
