import "./index.css";
import { useState, useEffect } from "react";
import { Dropdown, Input } from '../';
import StatRanges from "./StatRanges";
import Grid from '@mui/material/Grid';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { getDropdownPlaceholder } from "../../utils";


const MobileFilterDropdowns = ({
    types,
    checkedTypes,
    genders,
    checkedGenders,
    stats,
    minStatLevel,
    maxStatLevel,
    showStatDiv,
    setShowStatDiv = () => { },
    submitFilterValues = () => { },
    closeModalEvent = () => { },
}) => {


    const [filterAttrs, setFilterAttrs] = useState({
        selectedTypes: [],
        selectedGenders: [],
        statList: {},
    });


    const resetFilterValues = () => {
        let newstatList = { ...stats };
        Object.keys(newstatList).forEach((name) => {
            newstatList[name]['min'] = minStatLevel;
            newstatList[name]['max'] = maxStatLevel;
        });

        setFilterAttrs(prev => ({
            ...prev,
            selectedTypes: [],
            selectedGenders: [],
            statList: newstatList,
        }))

        submitFilterValues(filterAttrs);
    }


    useEffect(() => {
        setFilterAttrs(prev => ({
            ...prev,
            selectedTypes: checkedTypes,
            selectedGenders: checkedGenders,
            statList: stats,
        }));
    },[]);


    return (
        <Grid container spacing={4} className="filter-dropdowns-sm">
            <Grid item xs={12}>
                <Grid container spacing={4} className="filter-dropdowns-sm-header">
                    <Grid item xs={6} className="filter-dropdowns-sm-title">
                        Filters
                    </Grid>
                    <Grid item xs={6} className="text-align-right">
                        <a href='#' onClick={() => closeModalEvent(false)}><CancelOutlinedIcon /></a>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>

            <Grid item xs={12}>
                <Dropdown
                    name="type"
                    id="type"
                    classes="filter-dropdown"
                    label="Type"
                    dataList={types}
                    callback={(val) => setFilterAttrs(prev => ({ ...prev, selectedTypes: val }))}
                    selected={filterAttrs?.selectedTypes}
                />
            </Grid>
            <Grid item xs={12}>
                <Dropdown
                    name="gender"
                    id="gender"
                    classes="filter-dropdown"
                    label="Gender"
                    dataList={genders}
                    callback={(val) => setFilterAttrs(prev => ({ ...prev, selectedGenders: val }))}
                    selected={filterAttrs?.selectedGenders}
                />
            </Grid>
            <Grid item xs={12} onClick={() => setShowStatDiv(prev => !prev)}>
                <Input
                    name="stat"
                    id="stat"
                    classes="filter-input"
                    label="Stats"
                    placeholder={getDropdownPlaceholder(stats)}
                    onClickHandler={setShowStatDiv}
                    readOnly={true}
                />
            </Grid>

            {
                showStatDiv && <Grid item xs={12} className="stat-ranges-wrap-sm">
                    <StatRanges
                        dataList={filterAttrs?.statList}
                        minLevel={minStatLevel}
                        maxLevel={maxStatLevel}
                        closeModalEvent={setShowStatDiv}
                        onChangeStat={(val) => setFilterAttrs(prev => ({ ...prev, statList: val }))}
                    />
                </Grid>
            }



            <Grid item xs={12} className="filter-dropdowns-sm-btns">
                <Divider />
                <Grid container columnSpacing={4} className='mt-5'>
                    <Grid item xs={6} className="">
                        <Button onClick={() => resetFilterValues()} fullWidth={true} variant="outlined" className="btn-dark-blue-outlined">Reset</Button>
                    </Grid>
                    <Grid item xs={6} className="">
                        <Button onClick={() => submitFilterValues(filterAttrs)} fullWidth={true} variant="contained" className="btn-dark-blue">Apply</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default MobileFilterDropdowns;