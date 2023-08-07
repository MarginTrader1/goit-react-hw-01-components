import { Profile } from './ProfileCard/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Statistic } from './Statistic/Statistic';
import { FriendsList } from './FriendList/FriendsList';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>

      {/* 1 - Профиль социальной сети */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* 2- Секция статистики */}
      <Statistic title={"Upload stats"}>
        <StatisticsList data={data} />
      </Statistic>

      {/* 3 - Список друзей */}
      <FriendsList friends={friends}/>
    </div>
  );
};
