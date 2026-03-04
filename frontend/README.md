# Frontend (Vite)

This project has been migrated from Create React App to **Vite** so it can run faster in development and deploy smoothly on Vercel.

## Available Scripts

From the `frontend` directory run:

### `npm install`

Installs dependencies (make sure you have removed the old `react-scripts` package).

### `npm run dev` or `npm start`

Starts the Vite development server on http://localhost:3000 (or the port configured in `vite.config.js`).

The page will reload when you make changes. Vite's hot module replacement is extremely fast.

### `npm run build`

Builds the app for production to the `dist` folder. Vercel will automatically run this command when deploying.

### `npm run preview`

Run a local preview of the production build (`dist`).

### `npm run test`

Currently a placeholder; replace with your preferred test runner or configuration.

## Deployment on Vercel

1. Create a new project in Vercel and point it at this repository.
2. Set the root directory to the `frontend` folder (or leave blank if default). 
3. Vercel will detect a Vite/React project and set the build command to `npm run build` and the output directory to `dist`.
4. Environment variables can be configured in the Vercel dashboard.

The app will be served from the compiled `dist` directory.

## Learn More

- [Vite documentation](https://vitejs.dev/)
- [Deploying Vite apps on Vercel](https://vercel.com/guides/deploying-vite-with-vercel)
- [React documentation](https://reactjs.org/)
