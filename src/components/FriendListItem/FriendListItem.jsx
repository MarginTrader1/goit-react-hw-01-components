import { ListItem, Circle } from "./FriendListItem.styled";

export const FriendListItem = ({ friends }) => {
  
  return friends.map(friend => (
    <ListItem key={friend.id}> 
      <span><Circle status={friend.isOnline.toString()}></Circle></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </ListItem>
  ));
};
