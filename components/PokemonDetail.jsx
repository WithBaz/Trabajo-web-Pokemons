import PokemonImage from "@/components/PokemonImage"

export default function PokemonDetail({ currentPokemon }) {
  return (
    <div className="bg-blue-200 p-8 rounded-xl">
      {currentPokemon ? (
        <div className="text-center text-black">
          <PokemonImage currentPokemon={currentPokemon}></PokemonImage>
          <h2 className="text-xl text-center font-bold mt-4 capitalize">{currentPokemon.name}</h2>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <div className="font-semibold  ">Altura</div>
              <div>{currentPokemon.height / 10} m</div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <div className="font-semibold">Peso</div>
              <div>{currentPokemon.weight / 10} kg</div>
            </div>
          </div>

          {/* Sección de habilidades */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Habilidades</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {currentPokemon.abilities &&
                currentPokemon.abilities.map((abilityInfo, index) => (
                  <div key={index} className="bg-purple-200 px-3 py-1 rounded-full capitalize">
                    {abilityInfo.ability.name.replace("-", " ")}
                    {abilityInfo.is_hidden && <span className="text-xs ml-1">(oculta)</span>}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  )
}

