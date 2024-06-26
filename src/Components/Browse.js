import React, { useEffect } from 'react'
import Header from './Header' 
import { options } from '../utils/Constant'
import useNowPlayingmovies from '../Hooks/useNowPlayingmovies'
import MainContainer from './MainContainer'

const Browse = () => {
   useNowPlayingmovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse