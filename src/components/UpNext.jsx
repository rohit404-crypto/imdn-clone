import React from 'react'
import { useNavigate } from 'react-router-dom';

const UpNext = ({movies}) => {
  const navigate = useNavigate();
  return (
    <di>
      <p style={{color:'#F5C518' , fontSize:20 , fontWeight:'bold'}}>Up next</p>
      <>
        {movies.splice(0,3).map((movie)=>(
          <div key={movie.id} style={{display:'flex', alignItems:'start' , padding:10 ,backgroundColor:'#121212' ,gap:10 ,height:"100%"}}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" style={{width:68}} onClick={()=>navigate(`/movie/${movie.id}`)}/>
            <span style={{width:"70%", color:'white'}}>{movie.original_title}</span>
          </div>
        ))}
      </>
    </di>
  )
}

export default UpNext