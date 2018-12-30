import React from 'react';
import { connect } from 'react-redux';
import { List, Loader } from 'semantic-ui-react';
import { fetchMovieTrailer } from '../../actions';

class MovieTrailers extends React.Component {
    componentDidMount() {
        const { movieID } = this.props;

        if (!this.props.trailers) {
            this.props.fetchMovieTrailer(movieID);
        }
    }

    renderTrailers() {
        return this.props.trailers.map(trailer => {
            return (
                <List.Item key={trailer.id}>
                    <iframe
                        width="360"
                        height="215"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </List.Item>
            )
        });
    }

    render() {
        if (!this.props.trailers) {
            return <div><Loader active inline='centered' /></div>;
        }


        return (
            <List divided horizontal>
                {this.renderTrailers()}
            </List>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { trailers: state.trailers[ownProps.movieID] };
};


export default connect(
    mapStateToProps,
    { fetchMovieTrailer }
)(MovieTrailers);