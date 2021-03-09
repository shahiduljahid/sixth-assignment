import React from 'react';
import './Team.css'

const Team = (props) => {
    // console.log(props)
 

    
    return (
        
            <div className="member">
                <img src={props.team.img} alt="member"/>
                <h6>{props.team.name}</h6>
            
            
            
        </div>
    );
};
export default Team;
