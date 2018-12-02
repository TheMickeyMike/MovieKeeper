import React from 'react';
import { fetchMovie } from '../actions';
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

class MovieDetail extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchMovie(id);
    }
    render() {
        if (!this.props.movie) {
            return <div><Loader active inline='centered' content="Loading" /></div>;
        }

        return (
            <div>
                {console.log(this.props.movie)}
                Movie {this.props.movie.title}
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies[ownProps.match.params.id] };
};


export default connect(
    mapStateToProps,
    { fetchMovie }
)(MovieDetail);