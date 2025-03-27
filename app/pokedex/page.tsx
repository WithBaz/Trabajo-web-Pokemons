"use client"
import { useState, useEffect } from "react"
import PokemonDetail from "@/components/PokemonDetail"
import Button from "@/components/Button"

const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=10"

export default function Pokedex() {
  const [pokeList, setPokeList] = useState([] as any[]) // Lista de pokemones
  const [currentPokemon, setCurrentPokemon] = useState({} as any) // Pokemon actual
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("pokeList", data)
        setPokeList(data.results)
      })
  }, [])

  const fetchPokemon = async (url: string) => {
    // Hacemos una petición a la API de pokemon para obtener los datos del pokemon
    console.log("fetching pokemon", url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setCurrentPokemon(data)
  }

  useEffect(() => {
    // Escuchamos los cambios en el índice seleccionado y en la lista de pokemones
    // Y si hay un cambio, actualizamos el pokemon actual
    if (pokeList[selectedIndex]) {
      setCurrentPokemon(null)
      fetchPokemon(pokeList[selectedIndex].url)
    }
  }, [selectedIndex, pokeList])

  // Función para capitalizar la primera letra del nombre del Pokémon
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Lista de Pokémon como botones */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:w-1/3">
        {pokeList.map((pokemon, index) => (
          <Button key={index} onClick={() => setSelectedIndex(index)} selected={selectedIndex === index}>
            {`${index + 1}. ${capitalizeFirstLetter(pokemon.name)}`}
          </Button>
        ))}
      </div>

      {/* Detalles del Pokémon seleccionado */}
      <div className="md:w-2/3">
        <PokemonDetail currentPokemon={currentPokemon} />
      </div>
    </div>
  )
}

