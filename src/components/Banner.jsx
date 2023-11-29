import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';
const Banner = ({movies}) => {
  const navigate = useNavigate();
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    < >
      <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        {movies.map((movie)=>(
          
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" style={{width:"100%"}} onClick={()=>navigate(`/movie/${movie.id}`)}/>
          
        ))}
      </Carousel>
    </>
  )
}

export default Banner
