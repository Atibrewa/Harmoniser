import React from 'react'

// import perfect_night_dance from '../../public/visualizers/perfect_night_dance.mp4'

export default function Visualiser(name: string) {
  
    return (
      <div className="container">
        <video width="640" height="320" controls> 
          <source src= '../../public/visualizers/perfect_night_dance.mp4' type="video/mp4"/>
        </video>
      </div>
    );
  }
