import EastIcon from '@mui/icons-material/East';
import { CardBox } from '../../';


export const PokedexDetailsEvolutionChain = ({ compData = {} }) => {
  const { firstPokemonBasicDetails, secondPokemonBasicDetails, thirdPokemonBasicDetails } = compData;

  if (!firstPokemonBasicDetails || !secondPokemonBasicDetails || !thirdPokemonBasicDetails) {
    return;
  }


  return (
    <div className="row evolution-chain">
      <div className="col-12 stat-tile">
        Evolution Chain
      </div>

      <div className="col-12">
        <div className='evolution-chain-content-lg'>
          <CardBox
            size={'sm'}
            withCaption={true}
            compData={{
              id: firstPokemonBasicDetails?.id,
              formattedId: firstPokemonBasicDetails?.formattedId,
              name: firstPokemonBasicDetails?.name,
              img: firstPokemonBasicDetails?.img,
              types: firstPokemonBasicDetails?.types,
            }}
          />

          <div className='easticon-container'>
            <EastIcon />
          </div>

          <CardBox
            size={'sm'}
            withCaption={true}
            compData={{
              id: secondPokemonBasicDetails?.id,
              formattedId: secondPokemonBasicDetails?.formattedId,
              name: secondPokemonBasicDetails?.name,
              img: secondPokemonBasicDetails?.img,
              types: secondPokemonBasicDetails?.types,
            }}
          />

          <div className='easticon-container'>
            <EastIcon />
          </div>

          <CardBox
            size={'sm'}
            withCaption={true}
            compData={{
              id: thirdPokemonBasicDetails?.id,
              formattedId: thirdPokemonBasicDetails?.formattedId,
              name: thirdPokemonBasicDetails?.name,
              img: thirdPokemonBasicDetails?.img,
              types: thirdPokemonBasicDetails?.types,
            }}
          />
        </div>

        <div className='evolution-chain-content-sm'>
          <CardBox
            size={'sm'}
            withCaption={false}
            compData={{
              id: firstPokemonBasicDetails?.id,
              formattedId: firstPokemonBasicDetails?.formattedId,
              name: firstPokemonBasicDetails?.name,
              img: firstPokemonBasicDetails?.img,
              types: firstPokemonBasicDetails?.types,
            }}
          />

          <div className='easticon-container'>
            <EastIcon />
          </div>

          <CardBox
            size={'sm'}
            withCaption={false}
            compData={{
              id: secondPokemonBasicDetails?.id,
              formattedId: secondPokemonBasicDetails?.formattedId,
              name: secondPokemonBasicDetails?.name,
              img: secondPokemonBasicDetails?.img,
              types: secondPokemonBasicDetails?.types,
            }}
          />

          <div className='easticon-container'>
            <EastIcon />
          </div>

          <CardBox
            size={'sm'}
            withCaption={false}
            compData={{
              id: thirdPokemonBasicDetails?.id,
              formattedId: thirdPokemonBasicDetails?.formattedId,
              name: thirdPokemonBasicDetails?.name,
              img: thirdPokemonBasicDetails?.img,
              types: thirdPokemonBasicDetails?.types,
            }}
          />
        </div>
      </div>
    </div>
  )
}