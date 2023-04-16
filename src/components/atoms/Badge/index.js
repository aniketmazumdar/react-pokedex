import { getColorCodeByType } from '../../../utils';
import './index.css';

export const Badge = ({ title }) => {
    const colorCode = getColorCodeByType(title);

    return (
        <span className='badge' style={{backgroundColor: colorCode}}>
            {title}
        </span>
    );
}