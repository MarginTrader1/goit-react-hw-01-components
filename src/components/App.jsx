import { Profile } from './ProfileCard/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Statistics stats={data} />
      </>
    </div>
  );
};
