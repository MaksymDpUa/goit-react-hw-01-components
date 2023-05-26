import user from './data/user.json';
import { Profile } from './user/user';





export const App = () => {
  return (
        <Profile   userName={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}></Profile>
  

  );
};
