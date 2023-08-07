import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return <ul className={css.friend_list}>{'Список друзей'}</ul>;
};
