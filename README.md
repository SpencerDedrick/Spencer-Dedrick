# Spencer Dedrick Portfolio Website

Thanks for READING ME.

This is the redesign of my portfolio website. In this file you will find more about the development process behind the project.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

First and foremost I wanted to create a website to showcase the projects that I have been working on. I also wanted to move away from the template I had been using for so long.

I took a lot of inspiration for this site for various portfolios that caught my eyes over the last year or so. I wanted my website to be easy to be simple, clean, and user friendly. I also wanted to put an emphasis on responsiveness.

### Screenshot

![](./design/Calculator-Desktop.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
- Source Code URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This project started with some research into a ton of different portfolios. I ended up settling on a simple and straightforward design.

I began in Figma and designed what each page would look like. UI and design is something I have admittedly struggled with in the past. I used to try to design as I code but using Figma to design everyone ahead of time made this process 1000 times easier! I always worried that designing beforehand would slow down my work, but all in all, it really took a lot of pressure off the process. Being able to see how everything should look before typing a single line of code really increased my productivity as I could focus on one element of the site at a time.

### Built with

- HTML, CSS, Javscript
- Figma
- Flexbox
- Grid
- Mobile first design
- [React](https://reactjs.org/) - JS library
- [Create React App](https://create-react-app.dev/) - JS Utility
- [CRACO](https://github.com/gsoft-inc/craco) - JS Utility
- [React Router Dom](https://github.com/remix-run/react-router#readme) - React routing utility
- [Tailwind CSS](https://tailwindcss.com/) - CSS Utility

### What I learned

As mentioned before this was the first project where I fully designed the project before even starting to code. I used Figma for this and learned a ton of new things including prototyping. At first I was afraid taking time before hand to design the project would slow down my development. With this project I'm taking my time and I don't think that's a bad thing. The development process feels a lot less rushed and hectic due to the design being done seperately before hand.

Overall, I will continue making use of figma in the future as it has been a much better development experience overall. Also, it has given me the opportunity to learn some fun new things!

During this project I ran into a couple of problems that I needed to work through.

One of the first was figuring out how to dynamically use images based on the props of a component.
This is something I have done before in previous projects, but I wanted to find a more simplified solution than what I had done in the past. I ended up using the solution below. In the grand scheme of things I know this is pretty simple, but it seems to be something that is pretty commonly asked about on coding forums. I guess this is a "if you know you know" kind of thing.

<NavLink
to={`/${props.name}`}
className="container project-slide-container w-full inline-block" >
{/_ PROJECT SLIDE IMAGE _/}
<img
src={`images/${props.name}.png`}
alt={`${props.name} Project`}
className="object-cover h-full inline-block"
/>
</NavLink>

Another problem I ran into was trying to figure out how to make a horizontal scrolling container with my projects in it. Again it was something I have done before in previous projects but I was determined to use a more simplified solution rather than relying on adding more bloat by using an npm package.

The combination of Tailwind CSS classes below gave me the desired effect. I am pretty pleased with the outcome as it works with mouse and touch based devices.

<div className=" overflow-x-scroll overflow-y-hidden project-slider whitespace-nowrap inline-block space-x-6 mb-5">
      {/* PROJECT SLIDES MAPPED BASED ON PROJECTS ARRAY FOUND IN src\Pages\Projects\Projects.js */}
      {projects.map((project, i) => (
        <ProjectSlide name={project}></ProjectSlide>
      ))}
    </div>

There was also another first for me. This is my first time deploying a react app to github pages. That was....an interesting experience. I had previously only used netlify, but I wanted to try github and also use my first custom domain.

I had some difficulty getting the icon bar on my work page to handle clicks correctly and update the icons based on state. I eventually got it figure out thanks to this answer on stackoverflow. When dealing with an object as state the spread operator must be used.

https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render

### Continued development

This is something that will be continually updated as I develop more projects and expand in my knowledge. I have made this with expansion in mind. The site is designed to have projects added easily by adding an image thumbnail and a project name to my projects array.

### Useful resources

- [Solution to image loading problem](https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder) - This was such a simple solution to something that I was overcomplicating. I'm really grateful to have this information now because it opens up a lot of new possibilities, and will save me a lot of trouble in the future.

## Author

- Website - [Spencer Dedrick](https://spencerdedrick.com/)
- LinkedIn - [Spencer Dedrick](https://www.linkedin.com/in/spencer-dedrick/)

## Where I last left off

Fix header icon backgrounds

Make variable with relavent info from contants such as workListInfo = [[project name, project thumb, etc...]]
