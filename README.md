# ftir-sis-rework

This ground-up rework is intended to simplify, optimize, and make the current [`ftir-sis`](https://github.com/RastonLab/Virtual-FTIR-Spectrometer) more sustainable.

## In-Progress

### Switch to Vite

The original application was built using [`Create React App`](https://create-react-app.dev/). This rework uses [`Vite`](https://vitejs.dev/), which allows for future updates and improved speed.

### Use Tailwind CSS over plain CSS

The original application uses individual CSS files for each component. This choice added much complexity when attempting to add or update the application's style.

The choice to implement [`Tailwind CSS`](https://tailwindcss.com/) will hopefully make the application more sustainable.

### Migrate to React Router 6.4

[`React Router`](https://reactrouter.com/en/main) is utilized in the original application but since then version 6.4 introduced `createReactRouter()`, which is the new preferred way of setting up routes.

## Future Plans

### Rework SVGs

At the moment I am unsure of how to do this, but [`p5.js`](https://p5js.org/) seems like a better alternative that may allow animation to be less complex. Possibly this would allow for [physics-based molecules](https://p5js.org/examples/simulate-particles.html) in the sample cell.

### (Possibly) Simplify Redux Toolkit

To my knowledge, our previous implementation of [`Redux Toolkit`](https://redux-toolkit.js.org/) uses the recommended setup. However, there may be some needed optimizations.

## Resources

- React Router Tutorial followed for v6.4
  - <https://youtu.be/oTIJunBa6MA>
