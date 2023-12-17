import React from 'react'
// This import throws an error in VScode but works perfectly if we run it an is correct code!
import perfect_night_dance from '@/public/visualizers/perfect_night_dance.mp4'

/**
 * Creates a video element and returns it wrapped in a div with styling.
 * This is initialised with our default home video so that when a user clicks on a visualiser, 
 * we can simply change the source for the video as opposed to creating and removing elements from the DOM!
 */
export default function Visualiser() {
    return (
      <div className="flex h-full flex-col md:px-2">
        <video controls preload='auto' loop> 
          <source src= {perfect_night_dance} type="video/mp4"/>
        </video>
      </div>
    );
  }
