import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const ListOfFriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #e5e7d8;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const FriendsName = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 700;
  margin-left: 24px;
`;

const online = props => {
  return props.isOnline ? `green` : `red`;
};

export const OnlineStatus = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  background-color: ${online};
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 48px;
  margin-left: 12px;
`;
