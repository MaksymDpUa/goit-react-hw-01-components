import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from '../user/user';
import { Statistics } from '../Statistics/Statistics';
import { Main } from './App.styled';
import { FriendsList } from 'components/FriendsList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Main>
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    ></Profile>
      <Statistics stats={data} title="Upload stats"></Statistics>
      <FriendsList friends={friends}></FriendsList>
      <TransactionHistory items={transactions} />
    </Main>
  );
};
