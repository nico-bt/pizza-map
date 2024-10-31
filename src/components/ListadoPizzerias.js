import { useMap } from "react-leaflet"

function ListadoPizzerias({ setIsListVisible, isListVisible, pizzerias, openItemPopUp }) {
  const map = useMap()

  const handleClickItem = (item) => {
    map.setView(item.geocode) //Centra el mapa en el item
    setTimeout(() => openItemPopUp(item.id), 200) // Abre popUp, da tiempo para terminar centrado primero
  }

  return (
    <div className="absolute top-3 left-14 z-[500]">
      <button
        onClick={() => setIsListVisible((prev) => !prev)}
        className="bg-blue-600 hover:bg-blue-800 text-white tracking-wider py-2 px-4 rounded text-sm"
      >
        {isListVisible ? "▲ Ocultar" : "▼ Ver"} listado
      </button>
      {isListVisible && (
        <ul className=" bg-white bg-opacity-80">
          {pizzerias.map((item) => (
            <li
              key={item.id}
              className="pt-2 border-b-2 px-2 cursor-pointer hover:bg-yellow-200 flex gap-2 items-baseline"
              onClick={() => handleClickItem(item)}
            >
              <span className="text-xl">{item.nombre}</span> ({item.direccion})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListadoPizzerias
