import './App.css';
import { Header, Filter, PokedexList } from "./components";
import { PokedexContext } from './context';
import { useState } from 'react';

const App = () => {
  const [ contextData, setContextData ] = useState({
    allPokemons: [],
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
    <div className="App">
      <PokedexContext.Provider value={{ contextData, setContextData }}>
        <div className='container'>
          <Header />
          <Filter />
          <PokedexList />
        </div>
      </PokedexContext.Provider>
    </div>
  );
}

export default App;
