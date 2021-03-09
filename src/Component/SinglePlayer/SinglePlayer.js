import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = (props) => {
  const { name, Sallary, img } = props.player;

//   console.log(props)

  return (
    <div className="player">
      <div className="player-Photo">
        <img src={img} alt="" />
      </div>
      <div className="player-Details">
        <h1>{name}</h1>

        <div className="transfer-value">
          <p>Transfer Value:</p>
          <span>€{Sallary}M</span>
        </div>

        <br />
        <br />
        <button onClick={()=>props.handleTeam(props.player)} className="addPlayer">Add Player</button>
      </div>
    </div>
  );
};

export default SinglePlayer;
