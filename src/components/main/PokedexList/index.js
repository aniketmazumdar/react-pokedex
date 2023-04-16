import './index.css'
import { useEffect, useState, useContext, useCallback } from 'react';
import { CardBox, Modal, PokedexDetails } from '../../';
import {
  fetchDataFromAPi,
  getAvatar,
  getId,
  getTypes,
  getStats,
  getPokemonAndGenderMap,
  fetchPokemonListFromApi,
  getGendersByPokemon,
  getSiblingPokemonBasicDetails,
} from '../../../utils';
import { PokedexContext } from "../../../context";


export const PokedexList = () => {
  const [isMountModal, setIsMountModal] = useState(false);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const { contextData, setContextData } = useContext(PokedexContext);
  const { filteredPokemons, allPokemons, genderPokemonMap, pokemonListLimit, pokemonListOffset } = contextData;

  const fetchPokemonList = async () => {
    let mapGenderPokemon = genderPokemonMap;
    if (!mapGenderPokemon || Object.keys(mapGenderPokemon).length === 0) {
      mapGenderPokemon = await getPokemonAndGenderMap();
      await setContextData(prev => ({
        ...prev,
        genderPokemonMap: mapGenderPokemon,
      }));
    }

    const pokemonList = await fetchPokemonListFromApi(pokemonListOffset, pokemonListLimit);
    const pList = await Promise.all(pokemonList?.results?.map(async (item) => {
      const details = await fetchDataFromAPi(item.url);
      const types = await getTypes(details?.types);
      const gender = await getGendersByPokemon(mapGenderPokemon, item.name)
      const fRes = await {
        id: details?.id,
        formattedId: getId(details?.id),
        name: item.name,
        img: getAvatar(details?.sprites),
        types: types,
        gender: gender,
        height: details?.height,
        weight: details?.weight,
        abilities: details?.abilities,
        stats: getStats(details?.stats),
      };
      return await fRes;
    }));

    const finalPokemonList = [...allPokemons, ...pList]
    // Update Context with Pokemon list data
    await setContextData(prev => ({
      ...prev,
      allPokemons: finalPokemonList,
      pokemonListOffset: pokemonList?.offset,
    }));
  }


  const toggleModal = (flag = false, pokemonId = null) => {
    setIsMountModal(flag);
    setSelectedPokemonId(pokemonId);
  };


  const changePokemon = (flag = null) => {
    const siblingPokemon = getSiblingPokemonBasicDetails(allPokemons, selectedPokemonId, flag);
    setSelectedPokemonId(siblingPokemon?.id);
  };


  const handleScrollEvent = useCallback(() => {
    if ((window.innerHeight + document.documentElement.scrollTop) > document.documentElement.offsetHeight - 1) {
      fetchPokemonList();
    }
  }, [pokemonListOffset]);


  useEffect(() => {
    fetchPokemonList();
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [pokemonListOffset]);


  return (
    <>
      <h4>Showing {filteredPokemons?.length} of {allPokemons?.length} results</h4>
      <div className="pokedex-list" data-testid="test-pokedex-list">
        {
          filteredPokemons?.length && filteredPokemons?.map((item, indx) => {
            return (
              <CardBox
                key={indx}
                size={'md'}
                withCaption={true}
                compData={{
                  id: item?.id,
                  formattedId: item?.formattedId,
                  name: item?.name,
                  img: item?.img,
                  types: item?.types,
                }}
                handleClickEvent={toggleModal}
                {...{"data-testid": "test-cardbox-"+indx}}
              />
            )
          })
        }
      </div>

      {
        isMountModal && <Modal
          size='md'
          childComp={
            <PokedexDetails
              closeModalEvent={toggleModal}
              changePokemonEvent={changePokemon}
              pokemonId={selectedPokemonId}
            />
          }
        />
      }
    </>
  );
}