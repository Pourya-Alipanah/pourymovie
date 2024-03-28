import React from 'react'
import { SuggestedFilmCard } from '../suggested-film-card'

export const SuggestedFilms:React.FC = () => {
  return (
    <div className='w-3/4 flex flex-col items-center max-sm:flex-row max-sm:flex-wrap max-sm:flex-[1fr,1fr] max-sm:justify-center max-sm:w-full max-sm:gap-3'>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
        <SuggestedFilmCard/>
    </div>
  )
}
