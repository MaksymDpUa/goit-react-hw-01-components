import { createItemsWidh, getRandomHexColor, ItemLable, ItemPerc, StatListItem } from "./Statistics.styled";


export const ListItem = ({ stats }) => {
    return stats.map(({ id, label, percentage }) => {
        const ItemWidth = createItemsWidh(stats.length);
        const bcg = getRandomHexColor();
        return (
            <StatListItem key={id} style={{
                width: `${ ItemWidth }`,
                backgroundColor: `${ bcg }`
            }}>
        <ItemLable>{label}</ItemLable>
        <ItemPerc>{percentage}%</ItemPerc>
      </StatListItem>
    );
  });
};
