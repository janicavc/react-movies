import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard'

export default function ActorListPage({ movies }) {
  const cast = movies.map(movie => movie.cast);

  return (
    <>
      <div>
        <ActorCard cast={cast} />
      </div>
    </>
  )
}
