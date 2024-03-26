import React from 'react'
import { SuggestedFilmCard } from '../suggested-film-card'

export const SuggestedFilms:React.FC = () => {
  return (
    <div className='w-3/4 flex flex-col items-center'>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
    </div>
  )
}
