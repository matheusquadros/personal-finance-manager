import React, { useState } from 'react';

import DenseAppBar from '../../custom-components/navigation-bar'
import OutlinedCard from '../../custom-components/card'
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom'


export default function Home() {

  const [goals, setGoals] = useState([
    { id: 1, name: "test1" },
    { id: 2, name: "test2" }
  ]);

  return (
    <div className="Home">


      <DenseAppBar />

      <Grid container spacing={3}>

        {goals.map(g => {
          return (
            <OutlinedCard Concent={() => {
              return <div key={g.id}>{g.name}</div>
            }} />
          )
        })}

      </Grid>

      <Link to="/about"> go to about</Link>
    </div >
  );
};
