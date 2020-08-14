import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import './App.css';

function App() {

  const [ year, setYear] = useState(null);
  
  const GET_DATA = gql`
    query GetData ($year: Date!){
      launchesPast(find: {launch_date_local: $year}) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
        }
        ships {
          image
        }
      }
    } 
  `;

  const [getLaunches, { loading, data }] = useLazyQuery(GET_DATA);

  let launches;

  if (loading) return 'Loading...'; 
  if(data) {
    launches = data.launchesPast
  }

  const getValue = (event) => {
    setYear(event.target.value)
  }

  return (
      <div className="App">
        <div className="container">
          <input type="text" 
                 placeholder="Please enter year" 
                 className="input"
                 onChange={getValue}>
          </input>

          <button onClick={() => getLaunches({ variables: { year } })} className="button">Get Launches</button>
          
            {launches && 
              <ul>
                {launches.map(launch => {
                  return(
                    <li key={launch.mission_name}>
                      <p>mission name: {launch.mission_name}</p>
                      <p>start: {launch.launch_date_local}</p>
                      <p>launch platform: {launch.launch_site.site_name_long}</p>
                      <p>rocket name: {launch.rocket.rocket_name}</p>

                      {launch.ships.map(ship => {
                          if(ship === null) return <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                                                    className="ship-img" 
                                                    alt="ship"
                                                    key={ship}
                                                  />
                          return(
                            <img src={ship.image} alt="ship" key={ship.image} className="ship-img"/>
                          )
                      })}
                      <hr></hr>
                    </li>
                  )
                })}
              </ul>
            }
          
        </div>
      </div>
  );
}

export default App;
