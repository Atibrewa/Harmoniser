import {
    MusicalNoteIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';

  import Visualiser from './render-visualiser';
  
  // Map of visualizers to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const visualizers = [
    { name: 'Upbeat', icon: MusicalNoteIcon},
    { name: 'Calming', icon: MusicalNoteIcon},
    { name: 'Soothing', icon: MusicalNoteIcon},    
  ];
  
  export default function VisualizersList() {
    return (
      <>
        <a className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-colours-2 p-3 text-sm font-medium hover:bg-colours-1 hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3"
          href="/dashboard/search">
          <MagnifyingGlassIcon className="w-6" />
          <p className="hidden md:block">Search Visualizers</p>
        </a>
        {visualizers.map((visualizer) => {
          const LinkIcon = visualizer.icon;
          const CurrentVisualizer = Visualiser(visualizer.name);
          return (
            <button
              key={visualizer.name}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-colours-2 p-3 text-sm font-medium hover:bg-colours-1 hover:text-colours-5 md:flex-none md:justify-start md:p-2 md:px-3"
              // onClick={CurrentVisualizer}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{visualizer.name}</p>
            </button>
          );
        })}
      </>
    );
  }