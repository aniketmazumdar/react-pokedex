import CloseIcon from '@mui/icons-material/Close';

const Description = ({ content = '', setIsMount }) => {
  return (
    <div className='basic-info-desc-popup'>
      <a href='#' className="cross-icon" onClick={() => setIsMount(false)}><CloseIcon /></a>
      {content ?? 'N/A'}
    </div>
  )
}

export default Description;