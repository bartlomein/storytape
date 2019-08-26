import React, { useState, useEffect } from 'react';
import { handleRequest } from './api';
import Player from './components/Player';
import './App.css';

import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

function App() {
  const [players, setPlayers] = useState(null);

  const callPlayers = () => {
    const fetchPlayers = async () => {
      const allPlayers = await handleRequest('players');

      setPlayers(allPlayers.data);
    };

    fetchPlayers();

    return () => {
      setPlayers(null);
    };
  };

  useEffect(callPlayers, []);

  return (
    <div className='App'>
      {/* {players &&
        players.map(element => (
          <Player
            firstName={element.first_name}
            lastName={element.last_name}
            team={element.team}
          />
        ))} */}
      <MetricsGraphics
        title='Downloads'
        description='This graphic shows a time-series of downloads.'
        data={[
          { date: new Date('2014-11-01'), value: 12 },
          { date: new Date('2014-11-03'), value: 18 },
          { date: new Date('2014-11-04'), value: 15 },
          { date: new Date('2014-11-05'), value: 12 },
          { date: new Date('2014-11-06'), value: 18 },
          { date: new Date('2014-11-07'), value: 11 },
          { date: new Date('2014-11-08'), value: 5 }
        ]}
        width={600}
        height={250}
        x_accessor='date'
        y_accessor='value'
      />
      {/* <Home /> */}
    </div>
  );
}

export default App;
