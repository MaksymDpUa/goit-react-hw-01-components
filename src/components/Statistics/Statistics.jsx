import { createStatsList } from './StatsListmarkUp';
import { statsTitle } from './Title';
import { StatSection, StatList } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  const listTitle = statsTitle(title);
  const statsListItem = createStatsList(stats);

  return (
    <StatSection>
      {listTitle}
      <StatList>{statsListItem}</StatList>
    </StatSection>
  );
};
