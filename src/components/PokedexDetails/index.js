import './index.css';
import { useState, useEffect, useContext } from 'react';
import { PokedexContext } from "../../context";
import {
  toFeetandInch,
  convertPoundsToKilograms,
  getAbilities,
  getEggGroups,
  getWeakAgainst,
  getPokemonDesc,
  getEvolutionChain,
  fetchTypeDetailsFromApi,
  fetchSpeciesDetailsFromApi,
  fetchDataFromAPi,
  getPokemonBasicDetails,
  getSiblingPokemonBasicDetails,
} from '../../utils';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Strategies from './Strategies';
import EvolutionChain from './EvolutionChain';
import ButtonGroup from "./ButtonGroup";


const PokedexDetails = ({ pokemonId = null, closeModalEvent = null, changePokemonEvent = null }) => {
  const { contextData } = useContext(PokedexContext);

  const [pokemonDetails, setPokemonDetails] = useState();

  const { allPokemons } = contextData;
  const basicDetails = getPokemonBasicDetails(allPokemons, pokemonId);
  const { id, formattedId, name, img,  gender, types, height, weight, abilities, stats } = basicDetails;

  const fetchPokemonDetails = async () => {
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
      pokemonDesc,
      height: formattedHeight,
      weight: formattedWeight,
      eggGroups,
      abilities: formattedAbilities,
      types,
      weakAgainsts,
      firstEvolutionBasicDetails,
      secondEvolutionBasicDetails,
      thirdEvolutionBasicDetails,
      prevPokemonName: prevPokemonBasicDetails?.name,
      nextPokemonName: nextPokemonBasicDetails?.name,
    });
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, [basicDetails]);


  return (
    <div className='pokemon-details'>
      {
        pokemonDetails ?
          <>
            <BasicInfo
              compData={{
                id: id,
                formattedId: formattedId,
                name: name,
                img: img,
                types: types,
                pokemonDesc: pokemonDetails?.pokemonDesc,
              }}
              closeModalEvent={closeModalEvent}
              changePokemonEvent={changePokemonEvent}
            />

            <Characteristics
              pokemonDetails={pokemonDetails}
              compData={{
                height: pokemonDetails?.height,
                weight: pokemonDetails?.weight,
                gender,
                eggGroups: pokemonDetails?.eggGroups,
                abilities: pokemonDetails?.abilities,
                types: pokemonDetails?.types,
                weakAgainsts: pokemonDetails?.weakAgainsts,
              }}
            />

            <Strategies
              stats={stats}
            />

            <EvolutionChain
              compData={{
                firstPokemonBasicDetails: pokemonDetails?.firstEvolutionBasicDetails,
                secondPokemonBasicDetails: pokemonDetails?.secondEvolutionBasicDetails,
                thirdPokemonBasicDetails: pokemonDetails?.thirdEvolutionBasicDetails,
              }}
            />

            <ButtonGroup
              changePokemonEvent={changePokemonEvent}
              compData={{
                prevPokemonName: pokemonDetails?.prevPokemonName,
                nextPokemonName: pokemonDetails?.nextPokemonName,
              }}
            />
          </>
          :
          <h3>Loading</h3>
      }
    </div>
  )
}

export default PokedexDetails;