import './App.css';
import { Header, SearchBar, PokedexList } from "./components";
import { PokedexContext } from './context';
import { useState } from 'react';
import Container from '@mui/material/Container';

const App = () => {
  const [ contextData, setContextData ] = useState({
    allPokemons: [],
    genderPokemonMap: {},
    searchStr: '',
    selectedTypes: [],
    selectedGenders: [],
    statList: {},
    filteredPokemons: [],
    pokemonListLimit: 0,
    pokemonListOffset: 0,
  });

  return (
    <div className="App">
      <PokedexContext.Provider value={{ contextData, setContextData }}>
        <Container maxWidth="xl">
          <Header />
          <SearchBar />
          <PokedexList />
        </Container>
      </PokedexContext.Provider>
    </div>
  );
}

export default App;
