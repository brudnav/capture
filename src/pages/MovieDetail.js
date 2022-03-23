import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    const filterMovie = movies.filter((item) => item.url === location.pathname);
    if (filterMovie[0]) {
      setMovie(filterMovie[0]);
      setCurrentMovie(filterMovie[0]);
      return;
    }
    setMovie(currentMovie);
  }, [location, movies]);
  return (
    <Detail
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
    >
      <HeadLine>
        <h1>{movie.title}</h1>
        <img src={movie.mainImg} alt="" />
      </HeadLine>
      <Awards>
        {movie.awards?.map((item) => (
          <Award info={item} key={item.title} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt="movie" />
      </ImageDisplay>
    </Detail>
  );
};

const Detail = styled(motion.div)``;
const HeadLine = styled.div`
  height: 90vh;
  padding-top: 20vh;
  position: relative;

  h1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0rem;
  }
`;

const Award = ({ info }) => {
  return (
    <AwardStyle>
      <h3>{info.title}</h3>
      <div className="line"></div>
      <p>{info.description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
