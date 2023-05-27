import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem';
import { ListOfFriends } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends className="friend-list">
      <FriendsListItem friends={friends}></FriendsListItem>
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
