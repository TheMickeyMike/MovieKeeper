import React from 'react';
import MovieList from './movies/MovieList'
import MovieAdd from './movies/MovieAdd';

class Home extends React.Component {
    onSubmit = formValues => {
        this.props.addMovie(formValues);
    };

    render() {
        return (
            <React.Fragment>
                <MovieAdd />
                <MovieList watched={false} />
            </React.Fragment>
        );
    }
}
export default Home;