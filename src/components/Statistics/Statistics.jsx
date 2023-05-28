import PropTypes from 'prop-types';

import { ListItem } from './ListItem';
import { StatsTitle } from './Title';
import { StatSection, StatList } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
     {title && (<StatsTitle title={title}/>)}
      <StatList>
        <ListItem stats={stats}/>
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
