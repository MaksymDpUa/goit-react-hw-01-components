import { FriendsListItem } from "./FriendListItem";
import { ListOfFriends } from "./FriendsList.styled";

export const FriendsList = ({friends}) => {

    return <ListOfFriends className="friend-list">
 <FriendsListItem  friends={friends}></FriendsListItem>
</ListOfFriends>
}