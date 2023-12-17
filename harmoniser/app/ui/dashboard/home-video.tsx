import React from 'react'

import perfect_night_dance from '@/public/visualizers/perfect_night_dance.mp4'

export default function Visualiser() {

    return (
      <div className="flex h-full flex-col md:px-2">
        <video controls preload='auto' loop> 
          <source src= {perfect_night_dance} type="video/mp4"/>
        </video>
      </div>
    );
  }
