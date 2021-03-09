import React from "react";
import "./Value.css";

const Value = (props) => {
    let team = props.team;

    const value = team.reduce((total, pl) => Number(total) + Number(pl.Sallary), 0);
  return (
    <div>
      <h1 className="team-value">Team value</h1>

      <p className="value">€{value} M</p>
    </div>
  );
};

export default Value;
