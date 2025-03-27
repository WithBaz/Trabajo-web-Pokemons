export default function PokemonImage({ currentPokemon }) {
  return (
    <img
      src={currentPokemon?.sprites?.front_default || "/placeholder.svg"}
      alt={currentPokemon?.name}
      className="mx-auto"
      style={{ width: "200px", height: "200px" }}
    />
  )
}

