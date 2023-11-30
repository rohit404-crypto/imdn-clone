import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Button } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { categoryMovies } from '../services/api'
import { useNavigate } from 'react-router-dom';
const Slide = ({ title, category_url }) => {
 const [moviesList, setMoviesList] = useState([])
 const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
          let response = await categoryMovies(category_url)
          setMoviesList(response.results)
        }
        getData()
      },[])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
      <p style={{ color: '#F5C518', fontSize: 30, fontWeight: 'bold' , margin: '10px 0' }}>{title}<ChevronRightRoundedIcon sx={{verticalAlign:'middle' , fontSize:40 }} /></p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {moviesList.map((movie) => (
          <div key={movie.id} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10 , margin:"0 10px" }}>
            <BookmarkAddIcon
              style={{ position: 'absolute', top: 0, left: 0, color: '#F5C518', zIndex: 1, fontSize: 30 }}
            />
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}  onClick={() => navigate(`/movie/${movie.id}`)}/>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0 , marginRight: '5px'}}>
                <StarRoundedIcon sx={{ verticalAlign: 'top', marginRight: 0.7 }} />
                {movie.vote_average.toFixed(1)}
              </p>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', paddingRight: '7px' }}>{movie.original_title}</p>
              {/* <Button variant="contained" sx={{ backgroundColor: '#30353C', color: '#F5C518', fontWeight: 'bold', marginTop: '8px' }}>
                Watch Options
              </Button> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
