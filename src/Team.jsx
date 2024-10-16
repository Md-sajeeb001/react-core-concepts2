import { useEffect, useState } from "react";
import DisplayTeam from "./DisplayTeam";

export default function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      <h3>My Team: {teams.length}</h3>
      {teams.map((team) => (
        <DisplayTeam team={team}></DisplayTeam>
      ))}
    </div>
  );
}

/*
1. state to hold data
2. use effect with dependency array
3. use fetch to load data
4. set loaded to the state
5. display data with component
*/
