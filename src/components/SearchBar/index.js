import "./index.css";
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import TuneIcon from '@mui/icons-material/Tune';
import { PokedexContext } from "../../context";
import { fetchTypeListFromApi, fetchStatListFromApi, filterPokemons, getGenderNameList, getDropdownPlaceholder } from '../../utils';
import { Input, Dropdown, Modal } from '..';
import MobileFilterDropdowns from "./MobileFilterDropdowns";
import StatRanges from "./StatRanges";


const SearchBar = () => {
  const [types, setTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [showStatDiv, setShowStatDiv] = useState(false);
  const { contextData, setContextData } = useContext(PokedexContext);
  const { allPokemons, searchStr, selectedTypes, selectedGenders, statList, statRangeMinLevel, statRangeMaxLevel } = contextData;

  const loadDropdownsData = async () => {
    const typeApiRes = await fetchTypeListFromApi();
    setTypes(typeApiRes);

    const genderApiRes = await getGenderNameList();
    setGenders(genderApiRes);

    const statListApiRes = await fetchStatListFromApi();
    setContextData(prev => ({
      ...prev,
      statList: statListApiRes
    }));
  }


  const onChangeFilter = (type, data) => {
    setContextData(prev => ({
      ...prev,
      [type]: data
    }));
  }

  const onSubmitFilter = (filterData = {}) => {
    Object.keys(filterData).forEach(name => {
      onChangeFilter(name, filterData[name]);
    })
  }


  useEffect(() => {
    loadDropdownsData();
  }, []);


  useEffect(() => {
    filterPokemons(contextData, setContextData);
  }, [searchStr, selectedTypes, selectedGenders, JSON.stringify(statList), allPokemons]);


  return (
    <>
      <Grid container spacing={4} className="search-bar">
        <Grid item md={6} xs={10} className="">
          <Input
            name="name"
            id="name"
            classes="filter-input"
            label="Search by"
            placeholder="Name or Number"
            onChangeHandler={(val) => onChangeFilter('searchStr', val)}
            isSearch={true}
          />
        </Grid>

        <Grid item md={6} className="filter-dropdowns-lg">
          <Grid container spacing={4}>
            <Grid item md={4} xs={12} className="">
              <Dropdown
                name="type"
                id="type"
                classes="filter-dropdown"
                label="Type"
                dataList={types}
                callback={(val) => onChangeFilter('selectedTypes', val)}
                selected={selectedTypes}
              />
            </Grid>
            <Grid item md={4} xs={12} className="">
              <Dropdown
                name="gender"
                id="gender"
                classes="filter-dropdown"
                label="Gender"
                dataList={genders}
                callback={(val) => onChangeFilter('selectedGenders', val)}
                selected={selectedGenders}
              />
            </Grid>
            <Grid item md={4} xs={12} className="" onClick={() => setShowStatDiv(prev => !prev)}>
              <Input
                name="stat"
                id="stat"
                classes="filter-input"
                label="Stats"
                placeholder={getDropdownPlaceholder(statList)}
                readOnly={true}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2} xs={2} className="filter-dropdowns-drawer-wrapper">
          <a href='#' onClick={() => setIsOpenedModal(true)}><TuneIcon /></a>
        </Grid>
      </Grid>

      {
        showStatDiv && <Grid container className="stat-ranges-wrap-lg" justifyContent="flex-end">
          <Grid item md={6} xs={12}>
            <StatRanges
              dataList={statList}
              minLevel={statRangeMinLevel}
              maxLevel={statRangeMaxLevel}
              closeModalEvent={setShowStatDiv}
              onSubmitEvent={(val) => onChangeFilter('statList', val)}
            />
          </Grid>
        </Grid>
      }


      {
        /* Filter Dropdowns for only Mobile Screen  */
        <Modal
          size='sm'
          isOpen={isOpenedModal}
          childComp={
            <MobileFilterDropdowns
              types={types}
              checkedTypes={selectedTypes}
              genders={genders}
              checkedGenders={selectedGenders}
              stats={statList}
              minStatLevel={statRangeMinLevel}
              maxStatLevel={statRangeMaxLevel}
              showStatDiv={showStatDiv}
              setShowStatDiv={setShowStatDiv}
              submitFilterValues={onSubmitFilter}
              closeModalEvent={setIsOpenedModal}
            />
          }
        />
      }
    </>
  );
}

export default SearchBar;