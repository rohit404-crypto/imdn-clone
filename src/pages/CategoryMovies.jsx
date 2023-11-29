import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { categoryMovies } from '../services/api'
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL , NOWPLAYING_API_URL} from '../constants/constants'
import MovieCard from '../components/MovieCard';
const CategoryMovies = () => {
  const [moviesList, setMoviesList] = useState([])
 const navigate = useNavigate();
  const {category} = useParams()
  const categoryUrl = category === "popular" ? POPULAR_API_URL : category === "top_rated" ? TOPRATED_API_URL : category === "upcoming" ? UPCOMING_API_URL : NOWPLAYING_API_URL
  const categoryTitle = category === "popular" ? "Popular" : category === "top_rated" ? "Top Rated" : category === "upcoming" ? "Upcoming" : "Now Playing"
    useEffect(() => {
        const getData = async () => {
          let response = await categoryMovies( categoryUrl)
          setMoviesList(response.results)
        }
        getData()
      },[category])
  return (
    <>
    <h1 style={{textAlign:'center' ,color:'white'}}>{categoryTitle}</h1>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:30, marginTop:20 ,padding:'0 20'}}>
    {moviesList.map((movie) => (
       <MovieCard key={movie.id} Image_URL={movie.poster_path?`https://image.tmdb.org/t/p/original/${movie.poster_path}`:null} title={movie.original_title} vote_average={movie.vote_average} release_date={movie.release_date} onClick={()=>navigate(`/movie/${movie.id}`)}/>
    ))}
    </div>
    </>
  )
}

export default CategoryMovies
