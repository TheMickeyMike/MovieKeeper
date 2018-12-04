import React from 'react';
import { fetchMovie } from '../../actions';
import { connect } from 'react-redux';
import { GenresLabels, VoteScore, MovieDuration, ReleaseDate, CountingDownProgressBar } from './MovieItem';
import MovieCredits from './MovieCredits';
import { Grid, Header, Loader, Image } from 'semantic-ui-react';

class MovieShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchMovie(id);
    }
    render() {
        if (!this.props.movie) {
            return <div><Loader active inline='centered' content="Loading" /></div>;
        }

        const {
            id,
            image,
            title,
            original_title,
            overview,
            vote_average_mdb,
            genres,
            release_date,
            release_date_digital,
            runtime
        } = this.props.movie;


        return (
            <div>
                <Grid stackable>
                    <Grid.Column width={4}>
                        <Image
                            src={image}
                            size='large'
                            bordered />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h2' >
                            {title}
                            <Header.Subheader>{original_title}</Header.Subheader>
                        </Header>
                        <Grid>
                            <Grid.Column width={5} >
                                <VoteScore vote={vote_average_mdb} />
                            </Grid.Column>
                            <Grid.Column tablet={5} >
                                <MovieDuration duration={runtime} />
                            </Grid.Column>
                            <Grid.Column tablet={5} >
                                <ReleaseDate releaseDate={release_date} />
                            </Grid.Column>
                        </Grid>

                        <Grid.Row>
                            <GenresLabels genres={genres} />
                        </Grid.Row>
                        <Grid.Row>
                            {overview}
                        </Grid.Row>
                        <Grid.Row>
                            <CountingDownProgressBar
                                release_date={release_date}
                                release_date_digital={release_date_digital} />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Row>
                        <Grid.Column width={12} floated="right">
                            <Header size='huge'>Najlepiej opłacana obsada</Header>
                            <MovieCredits movieID={id} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies[ownProps.match.params.id] };
};


export default connect(
    mapStateToProps,
    { fetchMovie }
)(MovieShow);