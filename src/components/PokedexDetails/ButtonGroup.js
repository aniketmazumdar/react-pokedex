import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const ButtonGroup = ({ compData, changePokemonEvent = null }) => {
  const { prevPokemonName, nextPokemonName } = compData;

  return (
    <div className="button-group">
      <Button variant="contained" className="btn-dark-blue" onClick={() => changePokemonEvent('prev')}><WestIcon />&nbsp;&nbsp;&nbsp;&nbsp;{prevPokemonName ?? 'N/A'}</Button>
      <Button variant="contained" className="btn-dark-blue" onClick={() => changePokemonEvent('next')}>{nextPokemonName ?? 'N/A'}&nbsp;&nbsp;&nbsp;&nbsp;<EastIcon /></Button>
    </div>
  )
}

export default ButtonGroup;