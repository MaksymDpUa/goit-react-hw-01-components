import PropTypes from 'prop-types';

import {
  Avatar,
  Description,
  UserCard,
  UserInfo,
  UserName,
  UserStats,
  UserStatsItem,
  UserStatsName,
  UserStatsQuontity,
} from './user.styled';

export const Profile = ({
  userName,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <UserStats>
        <UserStatsItem>
          <UserStatsName>Followers</UserStatsName>
          <UserStatsQuontity>{stats.followers}</UserStatsQuontity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsName>Views</UserStatsName>
          <UserStatsQuontity>{stats.views}</UserStatsQuontity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsName>Likes</UserStatsName>
          <UserStatsQuontity>{stats.likes}</UserStatsQuontity>
        </UserStatsItem>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
