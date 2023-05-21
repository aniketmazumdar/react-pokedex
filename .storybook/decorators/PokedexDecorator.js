
import { PokedexContext } from '../../src/context';
import { useParameter } from '@storybook/addons';
import { useState, useContext } from 'react';

export const mockAllPokemonsData = [
  {
      "id": 4,
      "formattedId": "004",
      "name": "charmander",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      "types": [
          "Fire"
      ],
      "gender": [
          "Female",
          "Male"
      ],
      "height": 6,
      "weight": 85,
      "abilities": [
          {
              "ability": {
                  "name": "blaze",
                  "url": "https://pokeapi.co/api/v2/ability/66/"
              },
              "is_hidden": false,
              "slot": 1
          },
          {
              "ability": {
                  "name": "solar-power",
                  "url": "https://pokeapi.co/api/v2/ability/94/"
              },
              "is_hidden": true,
              "slot": 3
          }
      ],
      "stats": {
          "hp": 39,
          "attack": 52,
          "defense": 43,
          "special-attack": 60,
          "special-defense": 50,
          "speed": 65
      }
  },
  {
      "id": 5,
      "formattedId": "005",
      "name": "charmeleon",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      "types": [
          "Fire"
      ],
      "gender": [
          "Female",
          "Male"
      ],
      "height": 11,
      "weight": 190,
      "abilities": [
          {
              "ability": {
                  "name": "blaze",
                  "url": "https://pokeapi.co/api/v2/ability/66/"
              },
              "is_hidden": false,
              "slot": 1
          },
          {
              "ability": {
                  "name": "solar-power",
                  "url": "https://pokeapi.co/api/v2/ability/94/"
              },
              "is_hidden": true,
              "slot": 3
          }
      ],
      "stats": {
          "hp": 58,
          "attack": 64,
          "defense": 58,
          "special-attack": 80,
          "special-defense": 65,
          "speed": 80
      }
  },
  {
      "id": 6,
      "formattedId": "006",
      "name": "charizard",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      "types": [
          "Fire",
          "Flying"
      ],
      "gender": [
          "Female",
          "Male"
      ],
      "height": 17,
      "weight": 905,
      "abilities": [
          {
              "ability": {
                  "name": "blaze",
                  "url": "https://pokeapi.co/api/v2/ability/66/"
              },
              "is_hidden": false,
              "slot": 1
          },
          {
              "ability": {
                  "name": "solar-power",
                  "url": "https://pokeapi.co/api/v2/ability/94/"
              },
              "is_hidden": true,
              "slot": 3
          }
      ],
      "stats": {
          "hp": 78,
          "attack": 84,
          "defense": 78,
          "special-attack": 109,
          "special-defense": 85,
          "speed": 100
      }
  }
];

const PokedexDecorator = (Story, context) => {
    const [ contextData, setContextData ] = useState({
      allPokemons: mockAllPokemonsData,
      genderPokemonMap: {},
      searchStr: '',
      selectedTypes: [],
      selectedGenders: [],
      statList: {},
      filteredPokemons: [],
      pokemonListLimit: 30,
      pokemonListOffset: 0,
      statRangeMinLevel: 0,
      statRangeMaxLevel: 210,
      IS_POKEMON_LIST_PROCESSING: false,
      IS_POKEMON_BASIC_DETAILS_PROCESSING: false,
    });

  return (
    <PokedexContext.Provider value={{ contextData, setContextData }}>
        <Story />
    </PokedexContext.Provider>
  );
}

export default PokedexDecorator;