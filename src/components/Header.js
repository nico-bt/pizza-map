function Header() {
  return (
    <header
      className="flex items-center justify-center h-[400px]  bg-yellow-300 border-b-2 border-black"
      style={{
        backgroundImage: "url(/pizzaLogo2.jpg)",
        objectFit: "cover",
        backgroundPosition: "center left",
      }}
    >
      <div className="text-center bg-white bg-opacity-60 p-4 rounded-md">
        <h1
          className=" text-5xl sm:text-7xl mb-5 tracking-wider font-extrabold mx-auto"
          style={{ fontVariant: "small-caps" }}
        >
          Pizza Tour
        </h1>
        <p className="text-lg">🍕 10 pizzerías seleccionadas </p>
        <p className="text-lg">click en mapa o listado </p>
      </div>
    </header>
  )
}

export default Header
