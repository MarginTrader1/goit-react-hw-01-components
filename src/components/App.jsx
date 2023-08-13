import { Profile } from './ProfileCard/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Statistic } from './Statistic/Statistic';
import { FriendsList } from './FriendList/FriendsList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './Transaction/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json'

export const App = () => {
  return (
    <div>
      
      {/* 1 - Профиль социальной сети - стилизация выполнена CSS-модулями */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* 2- Секция статистики - стилизация выполнена CSS-модулями*/}
      <Statistic title={'Upload stats'}>
        <StatisticsList data={data} />
      </Statistic>

      {/* 3 - Список друзей - стилизация выполнена Styled Components*/}
      <FriendsList friends={friends}>
        <FriendListItem friends={friends} />
      </FriendsList>

      {/* 4 История транзакций - стилизация выполнена Styled Components */}
      <TransactionHistory transaction={transaction}/>
    </div>
  );
};
