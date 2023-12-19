# Harmoniser
An online visualiser for multipurpose applications inluding a focus on assisting people with disabilities and soothe symptoms.

## About the app
The story of our app came from the idea of creating a centralized place for different atmospheric needs. Whenever we need to focus or study, music helps us. Sometimes we want a cozy or focused atmosphere to study better or do homework better. Things like rain, or the crackling of a fireplace, paired with soft classical music help with that.
Along with this, we also wanted to heavily focus on accessibility with this project, which can be seen in our choices of music, colour palettes, fonts and overall design.
Along with this, because our visualizers are paired with selected music, one of our other goals was to help provide music therapy intervention for those who suffer from anxiety.

## Authors
[Aahanaa Tibrewal](https://github.com/Atibrewa)
[Nina Lin](https://github.com/nlin02)
[Soulai Vang](https://github.com/SoulaiVang)

## Installation
1. Pull the code
2. cd into the folder 'harmoniser' on terminal
3. type ```npm install``` (if this doesn't work, also run ```npm install next@latest react@latest react-dom@latest```)
4. Run the code! ```npm run dev```
5. Go to (http://localhost:3000/) and you're ready!

## Tools Used
**Languages:**

TypeScript, version 5.2.2

HTML, CSS


**Frontend:**

React, version 18.2.0

Tailwind, version 3.3.3


**Backend:**

Next.js Server Side Rendering, version ^14.0.2

Supabase Database and user authentication, version ^2.39.0

## Hosting
We plan on deploying this on github pages in the near future. We plan on using this for our capstones so we'd like to get things set up for easy sharing! Plus, we put a lot of hard work into this so people should be able to access it :)
We have a free Supabase account for the database and authentication which will become deactivated given a week of inactivity on our site but can be easily reactivated for our capstones!

## Next Features
- Favoriting Visualizers: Authenticated users are able to favorite visualizers and have them show up at the top of their list for future easy access.
- Database for Visualizers: Moving the visualizers to be stored in a database rather than as static files in our repo, it will be easier to store larger media and assign things like tags and categories.
- Search Feature: Currently, the search feature is unimplemented, but by moving the visualizers into a database, users can both search for visualizers by their exact title along with any associated tags/categories tied to that visualizer.
- Mix & Match: Instead of having preset videos and audios, users may be able to customized their experience by mixing and matching different visualizers and audios together for their own suited needs and tastes.


## Known Issues
- In desktop mode, selecting visualiser highlights it in the side nav bar but when in mobile mode, this highlight doesn't show up.
- If you are not on the homepage, you have to click a visualizer twice (once to return to homepage, once to render the specific visualizer)
- If you refresh the page while in dark mode, the logo will be presented in light mode and not in dark mode
- our favicon doesn't currently show up because we aren't deployed. for now i only shows ntext's own favicon
- there's a styling issue with login and signup so there is some whitespace below the blue background

## Credits
We want to thank all the artists and thinkers who's work has helped us create this website :)

### Art Credits
The bulk of our audio came from [Musopen](https://musopen.org/).  
[Pexels](https://www.pexels.com/) is a super uselful website where artists upload videos and photographs for open use. We really reccomend it because they're high quality and free to use without any watermarks.

#### Calming Lava
Audio: Gymnopedies, Satie  
Video Clips: [Anthony 🙂](https://www.pexels.com/@inspiredimages/)

#### Peaceful Leaves
Audio: Reverie, Debussy  
Video Clips: [lam loi](https://www.pexels.com/video/early-morning-sunlight-through-the-leaves-2840959/), [Engin Akyurt](https://www.pexels.com/@enginakyurt/), [Collis](https://www.pexels.com/@photosbycollis/)

#### Soothing Rain
Audio: Nocturne in E flat major, Chopin  
Video Clips: [Lisa Fotios](https://www.pexels.com/@fotios-photos/)

#### Upbeat Study
Audio: La vita è bella, Nicola Piovani  
Video Clips: [MART PRODUCTION](https://www.pexels.com/@mart-production/), [Engin Akyurt](https://www.pexels.com/@enginakyurt/), [Bakkaprabhu Uppar](https://www.pexels.com/@techcrazebk/), [StefWithAnF](https://www.pexels.com/@stefwithanf-1955763/), [Miguel Á. Padriñán](https://www.pexels.com/@padrinan/), [Dan Cristian Pădureț](https://www.pexels.com/@paduret/)

### Code Tutorials
[React Foundations](https://nextjs.org/learn/react-foundations)  
[Learn Next.js](https://nextjs.org/learn/dashboard-app)  
[Next.js Authentication with Supabase](https://www.youtube.com/watch?v=dhXjHGklaZc)
[Create Light and Dark Mode Toggle](https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d)

### More Thanks
We'd also really like to thank our professor, Joslenne Peña, for her help and support throughout the course of this project, our classmates and testers for making this so fun and giving us such great feedback and of course, the people on the world wide web, specially stack overflow, for their constant help when one gets stuck.

From the harmonisers,  
Thank you!
