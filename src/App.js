import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoryMovies from './pages/CategoryMovies';
import Signin from './pages/Signin';
import { Movie } from '@mui/icons-material';
import MovieCard from './components/MovieCard';
import SearchPage from './pages/SearchPage';
import { categoryMovies } from './services/api'
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import MovieDetail from './pages/MovieDetail';
function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    const getData = async (query) => {
      let response = await categoryMovies(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=6ffdd760694115f3d88d9b01e1af281f&language=en-US`)
      setSearchResults(response.results)
    }
    getData(query)
  }
  return (
    <div className="App">
      <Router>
        <Navbar handleSearch={handleSearch}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<CategoryMovies />} />
          <Route path='/*' element={<Home  />} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path="/search" element={<SearchPage searchResults={searchResults} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
