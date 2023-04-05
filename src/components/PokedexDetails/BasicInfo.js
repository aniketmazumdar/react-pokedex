import { useState } from 'react';
import { CardBox, Modal } from '..';
import Description from './Description';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


const BasicInfo = (props) => {
  const { compData = null, closeModalEvent = null, changePokemonEvent = null } = props;
  const { id, formattedId, name, img, types, pokemonDesc } = compData;
  const [isMount, setIsMount] = useState(false);


  return (
    <>
      <div className="basic-info">
        <div className='basic-info-lg'>
          <div className="basic-info-cardbox">
            <CardBox
              size={'lg'}
              withCaption={false}
              compData={{
                id: id,
                formattedId: formattedId,
                name: name,
                img: img,
                types: types,
              }}
            />
          </div>

          <div className='basic-info-title'>
            <b>{name ?? 'N/A'}</b>
          </div>

          <div className="basic-info-id">
            {formattedId ?? 'N/A'}
          </div>

          <div className='basic-info-icons'>
            <a href='#' onClick={() => changePokemonEvent('prev')} data-testid="test-btn-prev-change-pokemon"><ArrowCircleLeftOutlinedIcon /></a>
            <a href='#' onClick={() => closeModalEvent(false)} data-testid="test-btn-close-modal-lg"><CancelOutlinedIcon /></a>
            <a href='#' onClick={() => changePokemonEvent('next')} data-testid="test-btn-next-change-pokemon"><ArrowCircleRightOutlinedIcon /></a>
          </div>

          <div className='basic-info-content'>
            <div className='pokemon-description'>
              {pokemonDesc ?? 'N/A'}
            </div>
            ... <a href='#' className='readmore' onClick={() => setIsMount(true)} data-testid="test-btn-readmore-lg">read more</a>
          </div>
        </div>

        <div className='basic-info-sm'>
          <div className='basic-info-title'>
            <b>{name ?? 'N/A'}</b>
          </div>

          <div className='basic-info-icons'>
            <a href='#' onClick={() => closeModalEvent(false)} data-testid="test-btn-close-modal-sm"><CancelOutlinedIcon /></a>
          </div>

          <div className="basic-info-id">
            {formattedId ?? 'N/A'}
          </div>

          <div className="basic-info-cardbox">
            <CardBox
              size={'lg'}
              withCaption={false}
              compData={{
                id: id,
                formattedId: formattedId,
                name: name,
                img: img,
                types: types,
              }}
            />
          </div>

          <div className='basic-info-content'>
            <div className='pokemon-description'>
              {pokemonDesc ?? 'N/A'}
            </div>
            ... <a href='#' className='readmore' onClick={() => setIsMount(true)} data-testid="test-btn-readmore-sm">read more</a>
          </div>
        </div>
      </div>

      {
        isMount && <Modal
          size='md'
          childComp={
            <Description
              content={pokemonDesc}
              setIsMount={setIsMount}
            />
          }
        />
      }
    </>
  )
}

export default BasicInfo;