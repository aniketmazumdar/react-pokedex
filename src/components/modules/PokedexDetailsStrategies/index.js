import { Progress } from '../../';
import { statNameConstants } from '../../../utils';


export const PokedexDetailsStrategies = ({ stats = {} }) => {

  return (
    <div className="row strategies">
      <div className='col-12 mb-4'>
        <span className='stat-tile'>Stats</span>
      </div>

      <div className='stats'>
        {
          stats && Object.keys(stats)?.map((stat, indx) => (
            <div className='stat-child' key={indx} data-testid={'test-stat-child-'+indx}>
              <span>{statNameConstants[stat] ?? 'N/A'}</span>
              <Progress
                rate={stats[stat] ?? 0}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}