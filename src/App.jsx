
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import SearchModal from "./components/SearchModal";
import { useState } from "react";


function App(){
  const [showSearch, setShowSearch] = useState(false);

return(

<BrowserRouter>
<Navbar
    openSearch={() => setShowSearch(true)}
/>


<Routes>

<Route path="/" element={<Home/>}/>

<Route 
path="/movie/:id" 
element={<MovieDetails/>}
/>
<Route
    path="/search"
    element={<Search />}
/>
<Route 
path="/favorites" 
element={<Favorites/>}
/>

</Routes>
{showSearch && (
  <SearchModal
    onClose={() => setShowSearch(false)}
  />
)}
</BrowserRouter>

)
}


export default App;