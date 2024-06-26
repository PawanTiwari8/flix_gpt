import React, { useEffect } from 'react'
import { options } from '../utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/MovieSlice';

const useNowPlayingmovies = () => {
    const dispatch = useDispatch();
    const getnowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getnowPlayingMovies();
  },[])

  return (
    <div>useNowPlayingmovies</div>
  )
}

export default useNowPlayingmovies

