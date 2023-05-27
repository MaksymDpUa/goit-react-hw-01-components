import PropTypes from 'prop-types';

import { ListItem } from './ListItem';
import { StatsTitle } from './Title';
import { StatSection, StatList } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      <StatsTitle title={title}></StatsTitle>
      <StatList>
        <ListItem stats={stats}></ListItem>
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
