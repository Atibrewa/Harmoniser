'use client'

import {
    MusicalNoteIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
  
  // Map of visualizers to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const visualizers = [
    { name: 'Upbeat Study', icon: MusicalNoteIcon},
    { name: 'Calming Lava', icon: MusicalNoteIcon},
    { name: 'Peaceful Leaves', icon: MusicalNoteIcon},
    { name: 'Soothing Rain', icon: MusicalNoteIcon},    
  ];

  function changeSource(name: string) {
    window.localStorage.setItem('currVisualizer', name);
    const visualizer = document.querySelector("video");
    const visualizerTag = document.querySelector("h1");
    const links = document.querySelectorAll("")
    const visualizerPromise = import('@/public/visualizers/' + name + '.mp4');
    visualizerPromise.then(function(result) {
      const path = result.default;
      visualizer?.setAttribute("src", path);
      visualizerTag.innerText = name;
    });
  }

  function checkVisualizer() {
    window.addEventListener('DOMContentLoaded', function(){
      console.log("test");
      if(window.localStorage.getItem('click') != null) {
        const visualizerKey = window.localStorage.getItem('click');
        document.getElementById(visualizerKey).click();
        window.localStorage.removeItem('click');
      }
    })
  }

  export default function VisualizersList() {
    return (
      <>
        <Link className="flex h-[48px] grow text-colors_default items-center justify-center gap-2 rounded-md bg-block p-3 text-sm font-medium hover:bg-headerblock hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3"
          href="/dashboard/search">
          <MagnifyingGlassIcon className="w-6" />
          <p className="hidden md:block">Search Visualizers</p>
        </Link>
        {visualizers.map((visualizer) => {
          const LinkIcon = visualizer.icon;
          return (
            <Link
              id={visualizer.name}
              key={visualizer.name}
              href="/dashboard"
              className="flex h-[48px] grow text-colors_default items-center justify-center gap-2 rounded-md bg-block p-3 text-sm font-medium hover:bg-headerblock hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3"
              onClick={() => changeSource(visualizer.name)}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{visualizer.name}</p>
            </Link>
          );
        })}
      </>
    );
  }