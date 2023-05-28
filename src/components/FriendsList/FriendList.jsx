import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem';
import { ListOfFriends } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendsListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={id}
          />
        );
      })}
    </ListOfFriends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
