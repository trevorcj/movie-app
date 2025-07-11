# React Movie Application

This project is a movie application built using React and Vite. It allows users to search for movies and explore trending films.

## Features

- **React + Vite**: Combines the power of React with the speed and simplicity of Vite.
- **Movie Search**: Search for movies by title and view detailed information.
- **Trending Movies**: Explore popular and trending movies.
- **Hot Module Replacement (HMR)**: Enables instant updates during development without refreshing the page.
- **ESLint Integration**: Includes basic linting rules to help maintain code quality.

## APIs Used

- **[The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)**: Provides movie data, including search functionality, trending movies, and detailed information about individual films.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Utilizes Babel for Fast Refresh during development.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses SWC for Fast Refresh, offering faster builds.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn`.
3. Create a `.env` file in the root directory and add your TMDb API key:

```
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server with `npm run dev` or `yarn dev`.

## Learn More

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [TMDb API Documentation](https://developers.themoviedb.org/3/getting-started)
