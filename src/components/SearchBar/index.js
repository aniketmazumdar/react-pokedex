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
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [checkedGenders, setCheckedGenders] = useState([]);
  const [stats, setStats] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedStatModal, setIsOpenedStatModal] = useState(false);
  const { contextData, setContextData } = useContext(PokedexContext);
  const { allPokemons, searchStr, selectedTypes, selectedGenders, statList } = contextData;

  const loadDropdownsData = async () => {
    const typeApiRes = await fetchTypeListFromApi();
    setTypes(typeApiRes);

    const genderApiRes = await getGenderNameList();
    setGenders(genderApiRes);

    const statListApiRes = await fetchStatListFromApi();
    setStats(statListApiRes);

    setContextData(prev => ({
      ...prev,
      statList: statListApiRes
    }));
  }


  const onChangeSearch = (str) => {
    setContextData(prev => ({
      ...prev,
      searchStr: str
    }));
  }

  const onChangeType = (arr) => {
    setContextData(prev => ({
      ...prev,
      selectedTypes: arr
    }));
    setCheckedTypes(arr);
  }

  const onChangeGender = (arr) => {
    setContextData(prev => ({
      ...prev,
      selectedGenders: arr
    }));
    setCheckedGenders(arr);
  }

  const resetDropdownFields = () => {
    onChangeType([]);
    onChangeGender([]);
  }

  const onSubmitStatValues = (arr) => {
    setStats(arr);
    setContextData(prev => ({
      ...prev,
      statList: arr
    }));
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
        <Grid item md={6} sm={10} className="">
          <Input
            name="name"
            id="name"
            classes="filter-input"
            label="Search by"
            placeholder="Name or Number"
            onChangeHandler={onChangeSearch}
            isSearch={true}
          />
        </Grid>

        <Grid item md={6} className="filter-dropdowns-lg">
          <Grid container spacing={4}>
            <Grid item md={4} sm={12} className="">
              <Dropdown
                name="type"
                id="type"
                classes="filter-dropdown"
                label="Type"
                dataList={types}
                callback={onChangeType}
                selected={checkedTypes}
              />
            </Grid>
            <Grid item md={4} sm={12} className="">
              <Dropdown
                name="gender"
                id="gender"
                classes="filter-dropdown"
                label="Gender"
                dataList={genders}
                callback={onChangeGender}
                selected={checkedGenders}
              />
            </Grid>
            <Grid item md={4} sm={12} className="">
              <Input
                name="stat"
                id="stat"
                classes="filter-input"
                label="Stats"
                placeholder={getDropdownPlaceholder(stats)}
                onClickHandler={setIsOpenedStatModal}
                readOnly={true}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2} sm={2} className="filter-dropdowns-drawer-wrapper">
          <a href='#' onClick={() => setIsOpenedModal(true)}><TuneIcon /></a>
        </Grid>
      </Grid>


      {
        /* Filter Dropdowns for only Mobile Screen  */
        <Modal
          size='sm'
          isOpen={isOpenedModal}
          childComp={
            <MobileFilterDropdowns
              closeModalEvent={setIsOpenedModal}
              resetDropdownFields={resetDropdownFields}
              onChangeType={onChangeType}
              types={types}
              checkedTypes={checkedTypes}
              onChangeGender={onChangeGender}
              genders={genders}
              checkedGenders={checkedGenders}
              stats={stats}
            />
          }
        />
      }


      {
        /* StatRanges Modal  */
        <Modal
          size='md'
          isOpen={isOpenedStatModal}
          childComp={
            <StatRanges
              dataList={stats}
              closeModalEvent={setIsOpenedStatModal}
              onSubmitEvent={onSubmitStatValues}
            />
          }
        />
      }
    </>
  );
}

export default SearchBar;