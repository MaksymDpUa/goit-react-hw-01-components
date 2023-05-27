import PropTypes from 'prop-types';

import {
  FriendAvatar,
  FriendsName,
  ListOfFriendsItem,
  OnlineStatus,
} from './FriendsList.styled';

export const FriendsListItem = ({ friends }) => {
  return friends.map(({ isOnline, avatar, name, id }) => {
    return (
      <ListOfFriendsItem key={id}>
        <OnlineStatus isOnline={isOnline}></OnlineStatus>
        <FriendAvatar src={avatar} alt="User avatar" />
        <FriendsName>{name}</FriendsName>
      </ListOfFriendsItem>
    );
  });
};

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
