import React from 'react';
import MovieList from './movies/MovieList'
import { Input, Segment } from 'semantic-ui-react'

const Home = props => {
    return (
        <React.Fragment>
            <Segment textAlign="center">
                <Input
                    action={{ color: 'teal', labelPosition: 'right', icon: 'add', content: 'Add' }}
                    placeholder='Add new video...'
                    fluid
                />
            </Segment>

            <MovieList />
        </React.Fragment>
    )

}
export default Home;