import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
 <FavoritesProvider>
    <ThemeProvider>
        <App />
    </ThemeProvider>
</FavoritesProvider>
);