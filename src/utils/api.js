const API_BASE_URL = 'https://pokeapi.co/api/v2/';


export const fetchDataFromAPi = async (url) => {
    url = url.replace(API_BASE_URL, '');
    return await fetch(API_BASE_URL + url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
}


export const fetchTypeListFromApi = async () => {
    const res = await fetchDataFromAPi('type').then(res => res?.results);
    return res.map(item => item.name);
}


export const fetchGenderListFromApi = async () => {
    return await fetchDataFromAPi('gender').then(res => res?.results);
}


export const fetchStatListFromApi = async () => {
    const res = await fetchDataFromAPi('stat').then(res => res?.results);
    const statList = {};
    res.forEach(item => {
        if (!['accuracy', 'evasion'].includes(item?.name)) {
            statList[item?.name] = {
                min: 0,
                max: 210,
            }
        }
    });
    return statList;
}


export const fetchPokemonListFromApi = (offset = 0) => {
    const limit = 30;
    return fetchDataFromAPi('pokemon?offset=' + offset + '&limit=' + limit).then(res => {
        return {
            results: res?.results,
            limit: limit,
            offset: offset + limit,
        }
    });
}


export const fetchTypeDetailsFromApi = (id) => {
    if (!id) {
        console.log('ID is required for Type Details API!!');
        return;
    }
    return fetchDataFromAPi('type/' + id).then(res => res);
}


export const fetchSpeciesDetailsFromApi = (id) => {
    if (!id) {
        console.log('ID is required for Pokemon Species API!!');
        return;
    }
    return fetchDataFromAPi('pokemon-species/' + id).then(res => res);
}


export const fetchEvolutionChainFromApi = (id) => {
    if (!id) {
        console.log('ID is required for Pokemon Species API!!');
        return;
    }
    return fetchDataFromAPi('pokemon-species/' + id).then(res => res);
}
