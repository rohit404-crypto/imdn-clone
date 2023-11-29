import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard"

const SearchPage = ({searchResults}) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{textAlign:'center' ,color:'white'}}> Search open</h1>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:30, marginTop:20 ,padding:'0 20'}}>
        {searchResults.map((movie)=>(
         <MovieCard key={movie.id} Image_URL={movie.poster_path?`https://image.tmdb.org/t/p/original/${movie.poster_path}`:null} title={movie.original_title} vote_average={movie.vote_average} release_date={movie.release_date} onClick={()=>navigate(`/movie/${movie.id}`)}/>
        ))}
      </div>
    </> // Closing fragment tag added here
  )
}
export default SearchPage
