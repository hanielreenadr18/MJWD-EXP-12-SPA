# Experiment 12 – React Single Page Application (SPA)

## Aim
To develop a Single Page Application using React Router and navigate between Home, About and Contact pages without reloading the entire browser page.

## Algorithm
1. Create a React project using Vite.
2. Install the `react-router-dom` package.
3. Import `BrowserRouter` and wrap the main application with it.
4. Create Home, About, Contact and Not Found components.
5. Use `Link` and `NavLink` to provide navigation.
6. Configure application paths using `Routes` and `Route`.
7. Run the application and test each route.

## Program

### `src/main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### `src/App.jsx`
The application defines Home, About, Contact and Not Found components. `NavLink` provides navigation, while `Routes` and `Route` map URL paths to components. Refer to `src/App.jsx` for the complete implementation.

### `src/App.css`
The stylesheet provides a responsive beige, black and gold interface.

## Output
The browser displays a navigation bar and the selected page. Home, About and Contact open at `/`, `/about` and `/contact`. An invalid URL displays a 404 page.

## Observation
React Router changes the displayed component according to the URL. Navigation occurs on the client side without a traditional full-page reload.

## Result
Thus, a React Single Page Application was successfully developed using `react-router-dom`.

## Steps to Run
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Routes to Test
- `/` – Home Page
- `/about` – About Page
- `/contact` – Contact Page
- `/unknown` – Not Found Page
