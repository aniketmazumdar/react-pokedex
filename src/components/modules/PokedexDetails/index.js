import './index.css';
import { useState, useEffect, useContext } from 'react';
import {
  PokedexDetailsBasicInfo,
  PokedexDetailsCharacteristics,
  PokedexDetailsStrategies,
  PokedexDetailsEvolutionChain,
  PokedexDetailsButtonGroup
} from '../../';
import {
  toFeetandInch,
  convertPoundsToKilograms,
  getAbilities,
  getEggGroups,
  getWeakAgainst,
  getPokemonDesc,
  getEvolutionChain,
  fetchSpeciesDetailsFromApi,
  fetchDataFromAPi,
  fetchTypeDetailsFromApi,
  getPokemonBasicDetails,
  getSiblingPokemonBasicDetails,
} from '../../../utils';
import { PokedexContext } from "../../../context";


export const PokedexDetails = ({ pokemonId = null, closeModalEvent = null, changePokemonEvent = null }) => {
  const { contextData, setContextData } = useContext(PokedexContext);

  const [pokemonDetails, setPokemonDetails] = useState({
    id: '',
    formattedId: '',
    name: '',
    img: '',
    gender: '',
    types: [],
    stats: {},
    pokemonDesc: "",
    height: "",
    weight: "",
    eggGroups: "",
    abilities: "",
    weakAgainsts: [],
    firstEvolutionBasicDetails: {},
    secondEvolutionBasicDetails: {},
    thirdEvolutionBasicDetails: {},
    prevPokemonName: "",
    nextPokemonName: "",
  });

  const { allPokemons, IS_POKEMON_BASIC_DETAILS_PROCESSING } = contextData;


  const fetchPokemonDetails = async () => {
    await setContextData(prev => ({
      ...prev,
      IS_POKEMON_BASIC_DETAILS_PROCESSING: true
    }));

    const basicDetails = getPokemonBasicDetails(allPokemons, pokemonId);
    const { id, formattedId, name, img, gender, types, height, weight, abilities, stats } = basicDetails;

    const formattedHeight = await toFeetandInch(height);
    const formattedWeight = await convertPoundsToKilograms(weight);
    const formattedAbilities = await getAbilities(abilities);

    let pokemonDesc, eggGroups, evolutionChains, weakAgainsts;

    const species = await fetchSpeciesDetailsFromApi(id);      // pokemon-species API
    if (species) {
      pokemonDesc = await getPokemonDesc(species);
      eggGroups = await getEggGroups(species);

      const evolutionChainApiRes = await fetchDataFromAPi(species?.evolution_chain?.url);      // evolution-chain API
      evolutionChains = await getEvolutionChain(evolutionChainApiRes, allPokemons);
    }
    const { firstEvolutionBasicDetails, secondEvolutionBasicDetails, thirdEvolutionBasicDetails } = await evolutionChains;

    const typeApiRes = await fetchTypeDetailsFromApi(id);      // type API
    if (typeApiRes) {
      weakAgainsts = await getWeakAgainst(typeApiRes);
    }

    const prevPokemonBasicDetails = getSiblingPokemonBasicDetails(allPokemons, id, 'prev');
    const nextPokemonBasicDetails = getSiblingPokemonBasicDetails(allPokemons, id, 'next');

    await setPokemonDetails({
      id,
      formattedId,
      name,
      img,
      gender,
      types,
      stats,
      pokemonDesc,
      height: formattedHeight,
      weight: formattedWeight,
      eggGroups,
      abilities: formattedAbilities,
      weakAgainsts,
      firstEvolutionBasicDetails,
      secondEvolutionBasicDetails,
      thirdEvolutionBasicDetails,
      prevPokemonName: prevPokemonBasicDetails?.name,
      nextPokemonName: nextPokemonBasicDetails?.name,
    });

    await setContextData(prev => ({
      ...prev,
      IS_POKEMON_BASIC_DETAILS_PROCESSING: false
    }));
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemonId]);


  return (
    <div className='pokemon-details'>
      {
        pokemonDetails?.id ?
          <>
            <PokedexDetailsBasicInfo
              compData={{
                id: pokemonDetails?.id,
                formattedId: pokemonDetails?.formattedId,
                name: pokemonDetails?.name,
                img: pokemonDetails?.img,
                types: pokemonDetails?.types,
                pokemonDesc: pokemonDetails?.pokemonDesc,
              }}
              isLoading={IS_POKEMON_BASIC_DETAILS_PROCESSING}
              closeModalEvent={closeModalEvent}
              changePokemonEvent={changePokemonEvent}
            />

            <PokedexDetailsCharacteristics
              compData={{
                height: pokemonDetails?.height,
                weight: pokemonDetails?.weight,
                gender: pokemonDetails?.gender,
                eggGroups: pokemonDetails?.eggGroups,
                abilities: pokemonDetails?.abilities,
                types: pokemonDetails?.types,
                weakAgainsts: pokemonDetails?.weakAgainsts,
              }}
              isLoading={IS_POKEMON_BASIC_DETAILS_PROCESSING}
            />

            <PokedexDetailsStrategies
              stats={pokemonDetails?.stats}
              isLoading={IS_POKEMON_BASIC_DETAILS_PROCESSING}
            />

            <PokedexDetailsEvolutionChain
              compData={{
                firstPokemonBasicDetails: pokemonDetails?.firstEvolutionBasicDetails,
                secondPokemonBasicDetails: pokemonDetails?.secondEvolutionBasicDetails,
                thirdPokemonBasicDetails: pokemonDetails?.thirdEvolutionBasicDetails,
              }}
              isLoading={IS_POKEMON_BASIC_DETAILS_PROCESSING}
            />

            <PokedexDetailsButtonGroup
              compData={{
                prevPokemonName: pokemonDetails?.prevPokemonName,
                nextPokemonName: pokemonDetails?.nextPokemonName,
              }}
              isLoading={IS_POKEMON_BASIC_DETAILS_PROCESSING}
              changePokemonEvent={changePokemonEvent}
            />
          </>
          :
          <h3>Loading</h3>
      }
    </div>
  )
}