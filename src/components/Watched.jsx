import React from 'react';
import MovieList from './movies/MovieList'
import { Header } from 'semantic-ui-react'

const Watched = props => {
    return (
        <React.Fragment>
            <Header as='h2'>Obejrzane</Header>
            <MovieList watched={true} />
        </React.Fragment>
    )
}
export default Watched;