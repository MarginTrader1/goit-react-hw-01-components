import { ListItem } from "./FriendListItem.styled";

export const FriendListItem = ({ friends }) => {
  console.log(friends);

  return friends.map(friend => (
    <ListItem key={friend.id}> 
      <span></span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </ListItem>
  ));
};
