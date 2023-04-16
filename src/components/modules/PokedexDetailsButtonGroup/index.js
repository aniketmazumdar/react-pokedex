import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


export const PokedexDetailsButtonGroup = ({ compData, changePokemonEvent = null }) => {
  const { prevPokemonName, nextPokemonName } = compData;

  return (
    <div className="button-group">
      <Button
        variant="contained"
        className="btn-dark-blue"
        onClick={() => changePokemonEvent('prev')}
        data-testid="test-btn-prev-change-pokemon"
      >
        <WestIcon />&nbsp;&nbsp;&nbsp;&nbsp;{prevPokemonName ?? 'N/A'}
      </Button>

      <Button
        variant="contained"
        className="btn-dark-blue"
        onClick={() => changePokemonEvent('next')}
        data-testid="test-btn-next-change-pokemon"
      >
        {nextPokemonName ?? 'N/A'}&nbsp;&nbsp;&nbsp;&nbsp;<EastIcon />
      </Button>
    </div>
  )
}