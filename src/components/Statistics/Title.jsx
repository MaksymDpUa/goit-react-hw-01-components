import PropTypes from 'prop-types';

import { StatTitle } from './Statistics.styled';

export const StatsTitle = ( {title} ) => {
  return <StatTitle>{title}</StatTitle>;
};

StatsTitle.propTypes = {
  title: PropTypes.string,
};
