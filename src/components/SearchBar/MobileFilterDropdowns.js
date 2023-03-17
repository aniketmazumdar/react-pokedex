import "./index.css";
import { Dropdown } from '../';
import Grid from '@mui/material/Grid';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


const MobileFilterDropdowns = (props) => {
    const { closeModalEvent, resetDropdownFields, onChangeType, types, checkedTypes, onChangeGender, genders, checkedGenders, stats } = props;

    return (
        <Grid container spacing={4} className="filter-dropdowns-sm">
            <Grid item sm={12}>
                <Grid container spacing={4} className="filter-dropdowns-sm-header">
                    <Grid item sm={6} className="filter-dropdowns-sm-title">
                        Filters
                    </Grid>
                    <Grid item sm={6} className="text-align-right">
                        <a href='#' onClick={() => closeModalEvent(false)}><CancelOutlinedIcon /></a>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>

            <Grid item sm={12} className="">
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
            <Grid item sm={12} className="">
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
            <Grid item sm={12} className="">
                <Dropdown
                    name="stats"
                    id="stats"
                    classes="filter-dropdown"
                    label="Stats"
                    dataList={stats}
                />
            </Grid>


            <Grid item sm={12} className="filter-dropdowns-sm-btns">
                <Divider />
                <Grid container columnSpacing={4} className='mt-5'>
                    <Grid item sm={6} className="">
                        <Button onClick={() => resetDropdownFields()} fullWidth={true} variant="outlined" className="btn-dark-blue-outlined">Reset</Button>
                    </Grid>
                    <Grid item sm={6} className="">
                        <Button onClick={() => closeModalEvent(false)} fullWidth={true} variant="contained" className="btn-dark-blue">Apply</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default MobileFilterDropdowns;