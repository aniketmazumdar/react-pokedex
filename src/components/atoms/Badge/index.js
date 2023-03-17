import { getColorCodeByType } from '../../../utils';
import './index.css';

const Badge = ({ title }) => {
    const colorCode = getColorCodeByType(title);

    return (
        <span className='badge' style={{backgroundColor: colorCode}}>
            {title}
        </span>
    );
}

export default Badge;