import { FriendAvatar, FriendsName, ListOfFriendsItem, OnlineStatus } from "./FriendsList.styled";

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
