import "./index.css";
import ReactSlider from 'react-slider'

const DoubleRangeSlider = (props) => {
  const { indexNo = 0, name = '', minLevel = 0, maxLevel = 100, values, onAfterChange } = props;
  
  return (
    <div className="range-slider-block">
      <div className="range-slider-level-indicators">{minLevel}</div>
      <ReactSlider
        className="range-slider"
        thumbClassName="range-slider-handle"
        trackClassName="range-slider-track"
        markClassName="range-slider-track-mark"
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
        min={minLevel}
        max={maxLevel}
        defaultValue={[minLevel, maxLevel]}
        value={values}
        onAfterChange={(value) => onAfterChange({ value, indexNo, name })}
      />
      <div className="range-slider-level-indicators">{maxLevel}</div>
    </div>
  )
};

export default DoubleRangeSlider;
