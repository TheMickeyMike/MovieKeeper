import React from 'react';
import { fetchMovie } from '../../actions';
import { connect } from 'react-redux';
import { GenresLabels, VoteScore, MovieDuration, ReleaseDate, CountingDownProgressBar } from './MovieItem';
import MovieCredits from './MovieCredits';
import { Divider, Grid, Header, Loader, Image, Segment } from 'semantic-ui-react';
import MovieTrailers from './MovieTrailers';
import MovieActions from './MovieActions';


class MovieShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        if (!this.props.movie) {
            this.props.fetchMovie(id);
        }
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
            watched,
            release_date,
            release_date_digital,
            runtime
        } = this.props.movie;


        return (
            <div>
                <Grid stackable >
                    <Grid.Column width={7}>
                        <Segment attached>
                            <Image centered
                                src={image}
                                size="big"
                                bordered />
                        </Segment>
                        <MovieActions movie={this.props.movie} />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Header as='h1' >
                            {title}
                            <Header.Subheader>{original_title}</Header.Subheader>
                        </Header>
                        <Grid>
                            <Grid.Column width={5} >
                                <VoteScore vote={vote_average_mdb} as={"h3"} />
                            </Grid.Column>
                            <Grid.Column tablet={5} >
                                <MovieDuration duration={runtime} as={"h3"} />
                            </Grid.Column>
                            <Grid.Column tablet={5} >
                                <ReleaseDate releaseDate={release_date} as={"h3"} />
                            </Grid.Column>
                        </Grid>
                        <Divider hidden />
                        <Grid.Row>{overview}</Grid.Row>
                        <Divider hidden />
                        <Grid.Row>
                            <GenresLabels genres={genres} />
                        </Grid.Row>
                        <Divider hidden />
                        {watched ? null : (
                            <Grid.Row>
                                <CountingDownProgressBar
                                    release_date={release_date}
                                    release_date_digital={release_date_digital} />
                            </Grid.Row>
                        )}
                    </Grid.Column>
                    <Grid.Row>
                        <Grid.Column width={16} floated="right">
                            <Header size='huge'>Najlepiej opłacana obsada</Header>
                            <MovieCredits movieID={id} />
                            <Header size='huge'>Trailers</Header>
                            <MovieTrailers movieID={id} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return { movie: state.movies[parseInt(ownProps.match.params.id)] };
};


export default connect(
    mapStateToProps,
    { fetchMovie }
)(MovieShow);