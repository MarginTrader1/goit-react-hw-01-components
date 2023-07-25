import { Profile } from './ProfileCard/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
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
      <StatisticsList data={data}/>
    </div>

  );
};
