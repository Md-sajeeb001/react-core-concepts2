import { useEffect, useState } from "react";
import Display from "./DisplayFriends";

export default function Friends() {
  const [friends, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return(
    <div>
        <h3>Friend: {friends.length}</h3>
        {
            friends.map(friend=> <Display friend={friend}></Display>)
        }
    </div>
  )
}

/*
1. state to hold data
2. use effect with dependency array
3. use fetch to load data
4. set loaded to the state
5. display data with component
*/
