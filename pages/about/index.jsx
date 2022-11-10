import React from 'react';
import { useSelector } from "react-redux"
import Team from './Team';

const about = () => {
     const team = useSelector(state => state.team.team)
     console.log(team);
     return (
          <div>
               <Team></Team>
          </div>
     );
};

export default about;