import { useState } from "react";
import Fakedata from "../../MOCK_DATA.json";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import Team from "../Team/Team";
import Value from "../Value/Value";
import "./Players.css";

const Players = () => {
  const players = Fakedata;

  const [team, setNewPlayer] = useState([]);
  // const [value, setNewValue] = useState([]);

  const handleTeam = (player) => {
    // console.log(player)

    let index = team.findIndex((pl) => pl.name === player.name);

    if (index < 0) {
      setNewPlayer([...team, player]);
    } else {
      let newteam = team.filter((pl) => pl.name !== player.name);
      setNewPlayer(newteam);
     
    }
  
      //  console.log(value);                            
    
    
    // setNewValue(newValue);


    // console.log(team);
    // console.log(value);
  };
 

  return (
    <div className="main-container">
      <div className="player-container">
        {players.map((player) => (
          <SinglePlayer handleTeam={handleTeam} player={player}></SinglePlayer>
        ))}
      </div>

      <div className="team-container">
        <h1 className="club">Real Madrid football Club</h1>
        <div className="teamMeambers">
          {team.map((player) => (
            <Team team={player}></Team>
          ))}
        </div>

        <Value team ={team}></Value>

      
      </div>
    </div>
  );
};

export default Players;
