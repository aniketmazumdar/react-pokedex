import "./index.css";
import { statNameConstants } from '../../utils';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useEffect, useState, memo } from "react";
import { DoubleRangeSlider } from "..";


const StatRanges = ({
    dataList = {},
    closeModalEvent = null,
    onSubmitEvent = null,
}) => {
    const minLevel = 0, maxLevel = 210;
    const [statList, setStatList] = useState({});

    const onChangeEvent = ({ value, name }) => {
        let newstatList = {...statList};
        newstatList[name]['min'] = value[0];
        newstatList[name]['max'] = value[1];
        setStatList(newstatList);
    }


    const onResetEvent = () => {
        let newstatList = {...statList};
        Object.keys(newstatList).forEach((name) => {
            newstatList[name]['min'] = minLevel;
            newstatList[name]['max'] = maxLevel;
        });
        setStatList(newstatList);
        onSubmitEvent(statList);
    }

    useEffect(() => {
        setStatList(dataList)
    }, [JSON.stringify(dataList)]);


    return (
        <div className="stat-ranges">
            <div className="title-level">
                <span className="">Select Stats</span>
                <a href='#' onClick={() => closeModalEvent(false)}><CancelOutlinedIcon /></a>
            </div>

            <div className="range-level">
                {
                    Object.keys(statList).map((name, indx) => (
                        <div className="range-slider-wrap" key={indx}>
                            <div className="stat-label">
                                {statNameConstants[name]}
                            </div>
                            <DoubleRangeSlider
                                indexNo={indx}
                                name={name}
                                minLevel={minLevel}
                                maxLevel={maxLevel}
                                values={[statList[name]['min'], statList[name]['max']]}
                                onAfterChange={onChangeEvent}
                            />
                        </div>
                    ))
                }
            </div>

            <div className="button-level">
                <Button onClick={() => onResetEvent()} variant="outlined" className="btn-dark-blue-outlined">Reset</Button>
                <Button onClick={() => onSubmitEvent(statList)} variant="contained" className="btn-dark-blue">Apply</Button>
            </div>
        </div>
    );
}

export default memo(StatRanges);