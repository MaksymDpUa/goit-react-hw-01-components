import styled from 'styled-components';

export const UserCard = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #fafab3;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  background-color: #ccfdfd;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const UserInfo = styled.p`
  font-size: 16px;
  font-weight: 400px;
  color: #818188;
`;

export const UserStats = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
`;
export const UserStatsItem = styled.li`
  border: 1px solid #818188;
  width: calc(100% / 3);
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const UserStatsName = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  color: #686877;
`;

export const UserStatsQuontity = styled.span`
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #51515c;
`;
