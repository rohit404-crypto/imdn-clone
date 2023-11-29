import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './home.css'
import { categoryMovies } from '../services/api'
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL , NOWPLAYING_API_URL} from '../constants/constants'
import Banner from '../components/Banner'
import UpNext from '../components/UpNext'
import Slide from '../components/Slide'
const Home = () => {
  const[movies, setMovies]=useState([])
  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(POPULAR_API_URL)
      setMovies(response.results)
    }
    getData()
  },[])
  return (
    < >
      
        <div style={{display:'flex', justifyContent: 'center'}}>
        <div className="banner-container">
        <Banner movies={movies}/>
        </div>
        <div className="upnext-container">
        <UpNext movies={movies}/>
        </div>
       
       </div>
      
     <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:30, marginTop:20 , alignContent:'center'}}>
      <Slide category_url={TOPRATED_API_URL} title="Top Rated"/>
      <Slide category_url={UPCOMING_API_URL} title="Upcoming"/>
      <Slide category_url={NOWPLAYING_API_URL} title="Now Playing"/>
      </div>
      
      
      
    </>
  )
}

export default Home
