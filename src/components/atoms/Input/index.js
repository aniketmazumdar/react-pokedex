import './index.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';


const Input = (props) => {
    const { name, id, classes, label, placeholder, onChangeHandler = null, onClickHandler = null, isSearch = false, readOnly = false } = props;

    return (
        <FormControl sx={{ width: '100%' }} variant="outlined">
            <label htmlFor={''}>{label}</label>
            <OutlinedInput
                id={id}
                name={name}
                className={classes}
                endAdornment={isSearch && <InputAdornment position="end"><SearchIcon /></InputAdornment>}
                aria-describedby="inp"
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)}
                onClick={() => onClickHandler && onClickHandler(true)}
                readOnly={readOnly}
            />
        </FormControl>
    );
}

export default Input;