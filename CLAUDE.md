# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

React 19 + Vite app using JSX (no TypeScript). MUI v9 for all UI components. React Router v7 for navigation.

**Entry point:** `src/main.jsx` wraps the app with MUI `ThemeProvider` (auto dark/light based on OS preference), `CssBaseline`, and `AuthProvider`.

**Routing** (`src/App.jsx`): Two routes defined with `createBrowserRouter`:
- `/login` → `LoginScreen`
- `/` → `FakeStoreScreen`

**Auth pattern:** `AuthProvider` (`src/components/AuthProvider.jsx`) holds a JWT token in React Context, persisted to `localStorage`. Access token anywhere via the `useAuth()` hook (`src/hooks/useAuth.js`).

**Services** (`src/services/AuthServices.js`): All API calls use axios.
- `login()` — POSTs to a local backend at `BASE_URL:PORT/api/v1/auth/login`
- `getPokemonList()` — fetches products from `https://fakestoreapi.com/products`

**Backend config** (`src/utils/Constants.js`): `BASE_URL` and `PORT` point to the local backend server (currently `192.168.131.215:8081`). Update these when the backend IP changes.

**Screens** live in `src/screens/`, reusable components in `src/components/`. The `src/components/` folder also contains exploratory/practice components (`Counter.jsx`, `TaskList.jsx`, `Footer.jsx`) that are not currently used by any route.
